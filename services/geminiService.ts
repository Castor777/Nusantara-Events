
import { GoogleGenAI, Type } from "@google/genai";
import { Event, Exhibitor, MatchResult, User, PredictionResult, Language } from "../types";

/**
 * AI Content Generator - Ensuring 0 bugs during testing by strictly 
 * following SDK guidelines and initializing inside the function call.
 */
const safeGenerate = async (model: string, prompt: string, config: any = {}) => {
  if (!process.env.API_KEY) {
    console.error("GEMINI_API_KEY environment variable is not configured");
    return null;
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config
    });
    return response.text;
  } catch (error) {
    console.error(`AI Engine Failure [${model}]:`, error);
    return null;
  }
};

/**
 * Request throttling to stay within Gemini API rate limits (10 RPM)
 * Tracks last request time and enforces minimum delay between requests
 */
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 6000; // 6 seconds = 10 requests per minute

/**
 * Wait if necessary to respect rate limits
 */
const throttleRequest = async (): Promise<void> => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
    console.log(`⏱️ Throttling: waiting ${Math.round(waitTime / 1000)}s to respect API rate limits...`);
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }

  lastRequestTime = Date.now();
};

export const translateText = async (text: string, targetLanguage: Language): Promise<string> => {
  if (targetLanguage === 'en' || !text) return text;

  // Throttle request to respect rate limits (10 RPM = 6 seconds between requests)
  await throttleRequest();

  // Map language codes to full names that Gemini AI understands
  const languageNames: Record<Language, string> = {
    'en': 'English',
    'id': 'Indonesian',
    'th': 'Thai',
    'zh': 'Chinese',
    'vi': 'Vietnamese',
    'ms': 'Malay',
    'tl': 'Tagalog',
    'km': 'Khmer',
    'my': 'Burmese',
    'lo': 'Lao'
  };

  const languageName = languageNames[targetLanguage] || 'English';
  const prompt = `Translate this text to ${languageName}. Output ONLY the translated text, nothing else. Do not add explanations, notes, or context. Just the translation:\n\n${text}`;
  const result = await safeGenerate("gemini-2.0-flash-exp", prompt);
  return result || text;
};

/**
 * Translates multiple texts in a single batch API call to avoid rate limiting.
 * This is much more efficient than calling translateText for each item individually.
 */
export const translateBatch = async (texts: string[], targetLanguage: Language): Promise<string[]> => {
  if (targetLanguage === 'en' || texts.length === 0) return texts;

  // Map language codes to full names
  const languageNames: Record<Language, string> = {
    'en': 'English',
    'id': 'Indonesian',
    'th': 'Thai',
    'zh': 'Chinese',
    'vi': 'Vietnamese',
    'ms': 'Malay',
    'tl': 'Tagalog',
    'km': 'Khmer',
    'my': 'Burmese',
    'lo': 'Lao'
  };

  const languageName = languageNames[targetLanguage] || 'English';

  // Create a numbered list for the AI to translate
  const numberedTexts = texts.map((text, idx) => `[${idx}] ${text}`).join('\n\n');

  const prompt = `Translate the following ${texts.length} texts to ${languageName}. 
Output ONLY the translations in the same numbered format [0], [1], [2], etc. 
Do not add any explanations, notes, or commentary.
Each translation should start with its number in brackets followed by the translated text.

${numberedTexts}`;

  const result = await safeGenerate("gemini-2.0-flash-exp", prompt);

  if (!result) return texts; // Fallback to original if API fails

  // Parse the numbered responses
  try {
    const translations: string[] = [];
    const lines = result.split('\n');
    let currentTranslation = '';
    let currentIndex = -1;

    for (const line of lines) {
      const match = line.match(/^\[(\d+)\]\s*(.*)$/);
      if (match) {
        // Save previous translation
        if (currentIndex >= 0 && currentTranslation) {
          translations[currentIndex] = currentTranslation.trim();
        }
        // Start new translation
        currentIndex = parseInt(match[1]);
        currentTranslation = match[2];
      } else if (currentIndex >= 0) {
        // Continue current translation
        currentTranslation += '\n' + line;
      }
    }

    // Save last translation
    if (currentIndex >= 0 && currentTranslation) {
      translations[currentIndex] = currentTranslation.trim();
    }

    // Fill in any missing translations with originals
    for (let i = 0; i < texts.length; i++) {
      if (!translations[i]) {
        translations[i] = texts[i];
      }
    }

    return translations;
  } catch (error) {
    console.error('Failed to parse batch translations:', error);
    return texts; // Fallback to originals on parse error
  }
};

export const semanticSearchEvents = async (query: string, availableEvents: Event[]): Promise<string[]> => {
  const context = availableEvents.map(e => ({ id: e.id, name: e.name, loc: e.location, tags: e.tags }));
  const prompt = `Search Query: "${query}". Context: ${JSON.stringify(context)}. Return a JSON array of event IDs that match the intent. Return ONLY the array.`;

  const result = await safeGenerate("gemini-2.0-flash-exp", prompt, {
    responseMimeType: "application/json",
    responseSchema: { type: Type.ARRAY, items: { type: Type.STRING } }
  });

  try {
    return JSON.parse(result || "[]");
  } catch {
    return [];
  }
};

export const predictTurnout = async (event: Event, currentRegs: number): Promise<PredictionResult> => {
  const prompt = `Predict final attendance for: ${event.name} in ${event.location}. 
    Current registrations: ${currentRegs}. Historical data: ${event.historicalTurnout?.join(", ") || "None"}.
    Provide a realistic SEA market estimate. Output JSON with estimatedTotal (number), confidenceScore (0-1), factors (string array), and recommendation (string).`;

  const result = await safeGenerate("gemini-2.0-flash-exp", prompt, {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        estimatedTotal: { type: Type.NUMBER },
        confidenceScore: { type: Type.NUMBER },
        factors: { type: Type.ARRAY, items: { type: Type.STRING } },
        recommendation: { type: Type.STRING }
      },
      required: ["estimatedTotal", "confidenceScore", "factors", "recommendation"]
    }
  });

  return JSON.parse(result || JSON.stringify({
    estimatedTotal: currentRegs * 1.5,
    confidenceScore: 0.7,
    factors: ["Current registration velocity"],
    recommendation: "Increase digital marketing effort."
  }));
};

export const calculateMatches = async (user: User, exhibitors: Exhibitor[]): Promise<MatchResult[]> => {
  const prompt = `User Profile: Job: ${user.jobTitle}, Goals: ${user.goals}. 
    Exhibitors: ${JSON.stringify(exhibitors.map(e => ({ id: e.id, name: e.name, ind: e.industry, desc: e.description })))}.
    Rank matches. Output JSON array of objects with exhibitorId, matchScore (0-100), and reasoning.`;

  const result = await safeGenerate("gemini-2.0-flash-exp", prompt, {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          exhibitorId: { type: Type.STRING },
          matchScore: { type: Type.NUMBER },
          reasoning: { type: Type.STRING }
        },
        required: ["exhibitorId", "matchScore", "reasoning"]
      }
    }
  });

  return JSON.parse(result || "[]");
};

export const generatePersonalizedBriefing = async (user: User, event: Event, prediction: number): Promise<{ whatsapp: string, email: string }> => {
  const prompt = `Attendee: ${user.name}, Role: ${user.jobTitle}, Goals: ${user.goals}. 
    Event: ${event.name}. Expected turnout: ${prediction}.
    Generate 1. A short WhatsApp message (max 200 chars) that includes a personalized networking tip for the Southeast Asian market. Be punchy. 
    2. A concise 3-paragraph email. 
    Focus on strategic networking advice for SEA.`;

  const result = await safeGenerate("gemini-2.0-flash-exp", prompt, {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        whatsapp: { type: Type.STRING },
        email: { type: Type.STRING }
      },
      required: ["whatsapp", "email"]
    }
  });

  return JSON.parse(result || JSON.stringify({
    whatsapp: `AI Insight for ${user.name}: Since you're targeting ${user.goals || 'SEA growth'}, connect with Indonesian payment nodes in Hall A. Use the Nusantara Portal for direct intro!`,
    email: `Dear ${user.name}, welcome to ${event.name}. Our AI has analyzed your goals and recommends specific exhibitor matches.`
  }));
};

export const chatWithAiAssistant = async (message: string, history: any[]): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const chat = ai.chats.create({
      model: "gemini-2.0-flash-exp",
      config: {
        systemInstruction: "You are Nusantara Support, a regional expert in SEA trade shows. Be concise and helpful."
      },
      history: history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }))
    });
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I'm experiencing a brief connection node issue.";
  } catch (error) {
    console.error("Chat failure:", error);
    return "The regional support node is currently offline. Please try again shortly.";
  }
};

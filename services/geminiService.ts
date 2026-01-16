
import { GoogleGenAI, Type } from "@google/genai";
import { Event, Exhibitor, MatchResult, User, PredictionResult, PostEventReport, Language } from "../types";

/**
 * Robust content generator with fallback logic.
 * Instantiates GoogleGenAI inside to ensure latest API key.
 */
const safeGenerate = async (model: string, prompt: string, config: any = {}) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config
    });
    return response.text;
  } catch (error) {
    console.error(`AI Generation Error [${model}]:`, error);
    return null;
  }
};

export const translateText = async (text: string, targetLanguage: Language): Promise<string> => {
  if (targetLanguage === 'en' || !text) return text;
  const prompt = `Translate the following professional event text to ${targetLanguage}. Maintain a formal, business-friendly SEA regional tone: "${text}"`;
  const result = await safeGenerate("gemini-3-flash-preview", prompt);
  return result || text;
};

export const semanticSearchEvents = async (query: string, availableEvents: Event[]): Promise<string[]> => {
  const context = availableEvents.map(e => ({ id: e.id, name: e.name, loc: e.location, tags: e.tags }));
  const prompt = `Search Query: "${query}". Context: ${JSON.stringify(context)}. Return a JSON array of event IDs that match the intent. Return ONLY the array.`;
  
  const result = await safeGenerate("gemini-3-flash-preview", prompt, {
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
  
  const result = await safeGenerate("gemini-3-pro-preview", prompt, {
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
    estimatedTotal: currentRegs * 1.25,
    confidenceScore: 0.6,
    factors: ["Standard Market Growth"],
    recommendation: "Continue marketing outreach."
  }));
};

export const calculateMatches = async (user: User, exhibitors: Exhibitor[]): Promise<MatchResult[]> => {
  const prompt = `User Profile: Job: ${user.jobTitle}, Goals: ${user.goals}. 
    Exhibitors: ${JSON.stringify(exhibitors.map(e => ({ id: e.id, name: e.name, ind: e.industry, desc: e.description })))}.
    Rank matches. Output JSON array of objects with exhibitorId, matchScore (0-100), and reasoning.`;

  const result = await safeGenerate("gemini-3-flash-preview", prompt, {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          exhibitorId: { type: Type.STRING },
          matchScore: { type: Type.NUMBER },
          reasoning: { type: Type.STRING }
        }
      }
    }
  });

  return JSON.parse(result || "[]");
};

export const generatePersonalizedBriefing = async (user: User, event: Event, prediction: number): Promise<{ whatsapp: string, email: string }> => {
  const prompt = `Attendee: ${user.name}, Role: ${user.jobTitle}, Goals: ${user.goals}. 
    Event: ${event.name}. Expected turnout: ${prediction}.
    Generate 1. A short WhatsApp message (max 180 chars). 2. A concise 3-paragraph email. 
    Focus on strategic networking advice for SEA.`;

  const result = await safeGenerate("gemini-3-flash-preview", prompt, {
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
    whatsapp: `Hi ${user.name}, your badge for ${event.name} is ready. Looking forward to your goals!`,
    email: `Dear ${user.name}, welcome to the event. Strategic networking sessions are now open.`
  }));
};

/**
 * AI Assistant Chat handling.
 * Instantiates GoogleGenAI inside to ensure latest API key and correctly handles conversation history.
 */
export const chatWithAiAssistant = async (message: string, history: any[]): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const chat = ai.chats.create({ 
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are Nusantara Support, an expert in SEA event venues (MBS, JCC, BITEC). Be concise, helpful, and culturally aware."
      },
      // Map history roles to correct 'user' and 'model' roles for GenAI
      history: history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }))
    });
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Chat error:", error);
    return "Connection error. Please try again.";
  }
};

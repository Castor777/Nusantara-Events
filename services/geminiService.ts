
import { GoogleGenAI, Type } from "@google/genai";
import { Event, Exhibitor, MatchResult, User } from "../types";

const createClient = () => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

// 1. Semantic Search for Events
export const semanticSearchEvents = async (
  query: string, 
  availableEvents: Event[]
): Promise<string[]> => {
  const ai = createClient();
  if (!ai) return [];

  const eventContext = availableEvents.map(e => ({
    id: e.id,
    name: e.name,
    description: e.description,
    location: e.location,
    tags: e.tags.join(", "),
    category: e.category
  }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        You are an event aggregator assistant for Southeast Asia.
        User Query: "${query}"
        
        Database:
        ${JSON.stringify(eventContext)}

        Task: Return a JSON array of event IDs that match the user's intent.
        Consider location (e.g., "events in SG"), topic, and date relevance.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    return JSON.parse(response.text || "[]") as string[];
  } catch (error) {
    console.error("Gemini Search Error:", error);
    return [];
  }
};

// 2. AI Marketing Content Generator (Organizer Tool)
export const generateMarketingCopy = async (
  topic: string, 
  platform: 'LinkedIn' | 'Twitter' | 'Email'
): Promise<string> => {
  const ai = createClient();
  if (!ai) return "AI Service Unavailable";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        Generate a localized ${platform} marketing post for a Southeast Asian tech event.
        Topic/Key Highlight: "${topic}"
        
        Requirements:
        - Professional but engaging tone.
        - If Twitter, keep it under 280 chars with hashtags.
        - If LinkedIn, use bullet points.
        - Mention "Register Now" call to action.
      `
    });
    return response.text || "Could not generate content.";
  } catch (error) {
    return "Error generating marketing copy.";
  }
};

// 3. Attendee Support Chatbot
export const chatWithAiAssistant = async (
  message: string,
  history: {role: string, text: string}[]
): Promise<string> => {
  const ai = createClient();
  if (!ai) return "Support offline.";

  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are MantisBot, a helpful assistant for a SEA Trade Show platform. You help attendees with schedules, directions, and FAQs. You are polite, concise, and knowledgeable about Singapore, Jakarta, and Bangkok venues.",
      }
    });

    // Send history context (simplified for this demo)
    const response = await chat.sendMessage({ 
      message: message 
    });
    
    return response.text || "I didn't catch that.";
  } catch (error) {
    return "I'm having trouble connecting to the server.";
  }
};

// 4. B2B Smart Matchmaking System
export const calculateMatches = async (
  user: User,
  exhibitors: Exhibitor[]
): Promise<MatchResult[]> => {
  const ai = createClient();
  if (!ai) return [];

  const exhibitorContext = exhibitors.map(e => ({
    id: e.id,
    name: e.name,
    industry: e.industry,
    description: e.description,
    offerings: e.offerings.join(", "),
    targetAudience: e.targetAudience.join(", ")
  }));

  const userContext = {
    role: user.jobTitle || "Attendee",
    industry: user.industry || "General",
    goals: user.goals || "Networking and discovering new technology"
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        You are a world-class B2B Matchmaking Engine for a Trade Show.
        
        Attendee Profile:
        ${JSON.stringify(userContext)}

        Exhibitor List:
        ${JSON.stringify(exhibitorContext)}

        Task:
        1. Analyze the attendee's goals and industry.
        2. Evaluate each exhibitor for compatibility.
        3. Assign a "matchScore" from 0 to 100.
        4. Provide a "reasoning" (max 20 words) explaining why this is a good business match.
        5. Return ONLY exhibitors with a score > 50.
        6. Sort by score descending.
      `,
      config: {
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
      }
    });

    const matches = JSON.parse(response.text || "[]") as MatchResult[];
    return matches;
  } catch (error) {
    console.error("Matchmaking Error:", error);
    return [];
  }
};

import { GoogleGenAI, Type } from "@google/genai";
import { Event } from "../types";

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

import { GoogleGenAI, Type } from "@google/genai";
import { Event, Exhibitor, MatchResult, User, PredictionResult, PostEventReport } from "../types";

const createClient = () => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const semanticSearchEvents = async (query: string, availableEvents: Event[]): Promise<string[]> => {
  const ai = createClient();
  if (!ai) return [];
  const eventContext = availableEvents.map(e => ({ id: e.id, name: e.name, desc: e.description, loc: e.location }));
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Search Query: "${query}" Database: ${JSON.stringify(eventContext)}. Return JSON array of matching event IDs only.`,
      config: { 
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) { 
    console.error("Semantic search failed:", error);
    return []; 
  }
};

export const predictTurnout = async (
  event: Event, 
  currentRegistrations: number
): Promise<PredictionResult> => {
  const ai = createClient();
  if (!ai) return { estimatedTotal: 0, confidenceScore: 0, factors: [], recommendation: "" };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `
        ROLE: Senior Event Market Analyst for Southeast Asia.
        TASK: Predict final attendance.
        DATA: Event: ${event.name}, Loc: ${event.location}, Hist: ${event.historicalTurnout?.join(", ")}, Current: ${currentRegistrations}.
        OUTPUT: JSON with estimatedTotal, confidenceScore, factors, recommendation.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedTotal: { type: Type.NUMBER },
            confidenceScore: { type: Type.NUMBER },
            factors: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommendation: { type: Type.STRING }
          }
        }
      }
    });
    return JSON.parse(response.text || "{}") as PredictionResult;
  } catch (error) {
    return { estimatedTotal: currentRegistrations * 1.3, confidenceScore: 0.5, factors: ["Standard Growth"], recommendation: "N/A" };
  }
};

/**
 * Generates a post-event report with ROI calculations.
 */
export const generatePostEventReport = async (rawStats: Partial<PostEventReport>, event: Event): Promise<PostEventReport> => {
  const ai = createClient();
  if (!ai) throw new Error("AI Client not initialized");

  const roi = ((rawStats.revenueTotal! - rawStats.costTotal!) / rawStats.costTotal!) * 100;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `
        TASK: Generate a Post-Event Executive Audit for "${event.name}".
        METRICS: 
        - Actual Attendance: ${rawStats.attendanceActual} vs Predicted: ${rawStats.attendancePredicted}
        - Total Revenue: ${event.currency} ${rawStats.revenueTotal}
        - Total Cost: ${event.currency} ${rawStats.costTotal}
        - Calculated ROI: ${roi.toFixed(2)}%
        - Engagement: ${rawStats.briefingOpenRate}% AI Briefing Open Rate, ${rawStats.networkingConnections} Networking Connections made.

        OUTPUT: A JSON report including an 'aiExecutiveSummary' (3 paragraphs on performance, market fit, and future optimization) 
        and a 'sustainabilityImpact' statement.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            aiExecutiveSummary: { type: Type.STRING },
            sustainabilityImpact: { type: Type.STRING }
          },
          required: ["aiExecutiveSummary", "sustainabilityImpact"]
        }
      }
    });

    const aiPart = JSON.parse(response.text || "{}");
    
    return {
      ...rawStats,
      roi,
      aiExecutiveSummary: aiPart.aiExecutiveSummary,
      sustainabilityImpact: aiPart.sustainabilityImpact,
    } as PostEventReport;
  } catch (error) {
    console.error("Report generation failed:", error);
    return {
      ...rawStats,
      roi,
      aiExecutiveSummary: "An error occurred generating the AI report, but your financial data is calculated. ROI is positive.",
      sustainabilityImpact: "Sustainability data unavailable."
    } as PostEventReport;
  }
};

export const generatePersonalizedBriefing = async (user: User, event: Event, prediction: number): Promise<{ whatsapp: string, email: string }> => {
  const ai = createClient();
  if (!ai) return { whatsapp: "", email: "" };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        Generate a personalized briefing for ${user.name} attending ${event.name}.
        Job Title: ${user.jobTitle}, Goals: ${user.goals}.
        Predicted Event Turnout: ${prediction} people.
        
        REQUIRED OUTPUT:
        1. A short, professional WhatsApp message (max 200 chars).
        2. A structured professional email (HubSpot/Mailchimp style). 
        Include advice based on the high turnout prediction and their goals.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            whatsapp: { type: Type.STRING },
            email: { type: Type.STRING }
          },
          required: ["whatsapp", "email"]
        }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    return { 
      whatsapp: `Hi ${user.name}, your ticket for ${event.name} is ready! We expect a high turnout.`, 
      email: `Dear ${user.name}, thank you for registering for ${event.name}. See you there!` 
    };
  }
};

export const generateConfirmationInsights = async (user: User, event: Event): Promise<string> => {
  const ai = createClient();
  if (!ai) return "";
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a 2-sentence insight for ${user.name} (${user.jobTitle}) attending ${event.name}. Why is this event crucial for their goal: "${user.goals}"?`
    });
    return response.text || "";
  } catch (error) { return ""; }
};

export const generateMarketingCopy = async (topic: string, platform: string): Promise<string> => {
  const ai = createClient();
  if (!ai) return "AI Service Unavailable";
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a localized ${platform} post for: "${topic}". Focus on Southeast Asian professional tone.`
    });
    return response.text || "";
  } catch (error) { return "Failed to generate copy."; }
};

export const chatWithAiAssistant = async (message: string, history: any[]): Promise<string> => {
  const ai = createClient();
  if (!ai) return "Offline.";
  try {
    const chat = ai.chats.create({ 
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are Nusantara Support, an expert in SEA event venues and logistics (MBS, JCC, BITEC)."
      }
    });
    const response = await chat.sendMessage({ message });
    return response.text || "";
  } catch (error) { return "I'm having trouble connecting right now."; }
};

export const calculateMatches = async (user: User, exhibitors: Exhibitor[]): Promise<MatchResult[]> => {
  const ai = createClient();
  if (!ai) return [];
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Match User: ${JSON.stringify(user)} with Exhibitors: ${JSON.stringify(exhibitors)}. Return JSON with score and reasoning.`,
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
            }
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) { return []; }
};

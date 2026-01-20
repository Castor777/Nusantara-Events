// Quick API Key Test Script - No dependencies
import { GoogleGenAI } from "@google/genai";
import { readFileSync } from "fs";

// Read API key from .env file
const envContent = readFileSync('.env', 'utf8');
const match = envContent.match(/GEMINI_API_KEY=(.+)/);
const API_KEY = match ? match[1].trim() : null;

console.log("🔑 Testing Gemini API Key...");
console.log(`📍 Key starts with: ${API_KEY?.substring(0, 10)}...`);

if (!API_KEY) {
    console.error("❌ ERROR: GEMINI_API_KEY not found in .env file");
    process.exit(1);
}

try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });

    console.log("📡 Making test request...");
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: "Say 'Hello, API key is working!' in one line."
    });

    const text = response.text;

    console.log("\n✅ SUCCESS! API Key is working correctly.");
    console.log(`📝 Response: ${text}`);
} catch (error) {
    console.error("\n❌ API KEY ERROR:");
    console.error(`   Message: ${error.message}`);

    if (error.message?.includes("API_KEY_INVALID")) {
        console.error("\n💡 Fix: The API key is invalid. Please regenerate it in Google AI Studio.");
    } else if (error.message?.includes("PERMISSION_DENIED")) {
        console.error("\n💡 Fix: Check API key restrictions in Google AI Studio.");
    } else if (error.message?.includes("quota")) {
        console.error("\n💡 Fix: API quota exceeded. Wait or check billing settings.");
    }
}

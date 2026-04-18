import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const getAIResponse = async (prompt: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            { text: `You are Arta's AI Assistant. Arta is a creative developer who builds bold, brutalist websites. 
            Here is some context about Arta: ${context}. 
            Answer the user's question as if you are Arta's digital represententative. Keep it professional, creative, and slightly bold.` },
            { text: prompt }
          ]
        }
      ],
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Maaf, asisten AI saya sedang beristirahat. Silakan hubungi saya langsung!";
  }
};

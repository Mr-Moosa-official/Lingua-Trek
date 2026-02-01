"use server";

import { explainLocalIdiom, type ExplainLocalIdiomInput, type ExplainLocalIdiomOutput } from "@/ai/flows/explain-local-idioms";

export async function getIdiomExplanation(input: ExplainLocalIdiomInput): Promise<{ success: boolean; data?: ExplainLocalIdiomOutput; error?: string; }> {
  try {
    const result = await explainLocalIdiom(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in getIdiomExplanation action:", error);
    // In a real app, you might want to log this error to a service
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}

'use server';

/**
 * @fileOverview Explains local idioms, their cultural context, and appropriate usage.
 *
 * - explainLocalIdiom - A function that handles the explanation of local idioms.
 * - ExplainLocalIdiomInput - The input type for the explainLocalIdiom function.
 * - ExplainLocalIdiomOutput - The return type for the explainLocalIdiom function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainLocalIdiomInputSchema = z.object({
  idiom: z.string().describe('The local idiom to explain.'),
  situation: z.string().optional().describe('The situation in which the idiom might be used.'),
});
export type ExplainLocalIdiomInput = z.infer<typeof ExplainLocalIdiomInputSchema>;

const ExplainLocalIdiomOutputSchema = z.object({
  explanation: z.string().describe('The meaning of the idiom.'),
  culturalContext: z.string().describe('The cultural context of the idiom.'),
  appropriateUsage: z.string().describe('How to use the idiom appropriately.'),
  example: z.string().describe('An example of the idiom used in a sentence.'),
  isApplicable: z.boolean().describe('Whether the idiom is applicable to the given situation.'),
});
export type ExplainLocalIdiomOutput = z.infer<typeof ExplainLocalIdiomOutputSchema>;

export async function explainLocalIdiom(input: ExplainLocalIdiomInput): Promise<ExplainLocalIdiomOutput> {
  return explainLocalIdiomFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainLocalIdiomPrompt',
  input: {schema: ExplainLocalIdiomInputSchema},
  output: {schema: ExplainLocalIdiomOutputSchema},
  prompt: `You are a cultural expert specializing in local idioms.

You will explain the meaning, cultural context, and appropriate usage of the given idiom.

Idiom: {{{idiom}}}

Situation: {{{situation}}}

Consider the situation and determine if the idiom is applicable. Set the isApplicable field accordingly.

Provide an example of the idiom used in a sentence.
`,
});

const explainLocalIdiomFlow = ai.defineFlow(
  {
    name: 'explainLocalIdiomFlow',
    inputSchema: ExplainLocalIdiomInputSchema,
    outputSchema: ExplainLocalIdiomOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);


import { buildPrompt } from "./buildPrompt";

export async function generateDaxMeasure(userInput: string) {
  const fakeModel = `
Tables:
Sales(Amount, Date)
Date(Date)
`;

  const prompt = buildPrompt(fakeModel, userInput);

  console.log("PROMPT:\n", prompt);
}

import fs from "fs";

export function buildPrompt(modelMetadata: string, userInput: string) {
  const template = fs.readFileSync("prompts/dax-measure-generator.md", "utf-8");

  return template
    .replace("{{MODEL_METADATA}}", modelMetadata)
    .replace("{{USER_INPUT}}", userInput);
}

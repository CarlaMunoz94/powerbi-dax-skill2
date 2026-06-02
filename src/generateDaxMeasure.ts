import { buildPrompt } from "./buildPrompt";

// Cliente real MCP (ajusta URL si cambia)
const mcpClient = {
  async getTables() {
    const res = await fetch("http://localhost:3000/tables");
    return res.json();
  },

  async getRelationships() {
    const res = await fetch("http://localhost:3000/relationships");
    return res.json();
  },

  async getMeasures() {
    const res = await fetch("http://localhost:3000/measures");
    return res.json();
  }
};

function formatMetadata(tables: any, relationships: any, measures: any) {
  return `
Tables:
${tables.map((t: any) => `${t.name}(${t.columns.join(", ")})`).join("\n")}

Relationships:
${relationships.map((r: any) => `${r.from} -> ${r.to}`).join("\n")}

Measures:
${measures.map((m: any) => m.name).join("\n")}
`;
}

export async function generateDaxMeasure(userInput: string) {
  const tables = await mcpClient.getTables();
  const relationships = await mcpClient.getRelationships();
  const measures = await mcpClient.getMeasures();

  const metadata = formatMetadata(tables, relationships, measures);

  const prompt = buildPrompt(metadata, userInput);

  return prompt; // después lo conectamos a Copilot
}

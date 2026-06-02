import { generateDaxMeasure } from "./generateDaxMeasure";

async function main() {
  const input = process.argv.slice(2).join(" ");

  if (!input) {
    console.log("Usa: node src/index.js 'ventas YTD'");
    return;
  }

  const result = await generateDaxMeasure(input);

  console.log("\n=== PROMPT GENERADO ===\n");
  console.log(result);
}

main();

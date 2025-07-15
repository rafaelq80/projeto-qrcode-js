import prompt from "prompt";
import chalk from "chalk";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  console.log(chalk.green("\nGerando QR Code..."));
  const result = await prompt.get(promptSchemaQRCode);
  await handle(null, result);
}

export default createQRCode;

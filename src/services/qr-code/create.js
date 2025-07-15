import prompt from "prompt";
import chalk from "chalk";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

// Função responsável por iniciar o fluxo de geração de QR Code
async function createQRCode() {
  console.log(chalk.green("\nGerando QR Code..."));
  // Solicita ao usuário as informações necessárias para gerar o QR Code
  const result = await prompt.get(promptSchemaQRCode);
  // Chama o handler para processar o resultado
  await handle(null, result);
}

export default createQRCode;

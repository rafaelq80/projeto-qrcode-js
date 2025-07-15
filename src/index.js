import prompt from "prompt";
import chalk from "chalk";

import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

function printHeader() {
  console.clear();
  console.log(chalk.bgCyan.black.bold("\n   UTILITÁRIOS PARA E-COMMERCE   ").padEnd(40));
  console.log(chalk.gray("------------------------------------------"));
}

function printMenu() {
  console.log(chalk.bold("Escolha uma opção:"));
  console.log(chalk.yellow("  [1] Gerar QR Code"));
  console.log(chalk.yellow("  [2] Gerar Senha Segura"));
  console.log(chalk.yellow("  [0] Sair"));
}

async function askMenuOption() {
  while (true) {
    try {
      const res = await prompt.get(promptSchemaMain);
      const select = res.select;
      if (["0", "1", "2", 0, 1, 2].includes(select)) return select;
    } catch {}
    console.log(chalk.red("Opção inválida. Por favor, escolha 0, 1 ou 2."));
  }
}

async function askContinue() {
  const { again } = await prompt.get([
    {
      name: "again",
      description: chalk.yellow("Deseja realizar outra operação? (s/n)"),
      pattern: /^[snSN]$/,
      message: chalk.red("Digite 's' para sim ou 'n' para não."),
      required: true,
    },
  ]);
  return again.toLowerCase() === "s";
}

async function main() {
  let running = true;
  let first = true;
  while (running) {
    printHeader();
    if (first) {
      console.log(chalk.greenBright("Bem-vindo ao kit de utilidades para e-commerce!\n"));
      first = false;
    }
    printMenu();
    const select = await askMenuOption();
    if (select == 1 || select === "1") {
      await createQRCode();
    } else if (select == 2 || select === "2") {
      await createPassword();
    } else if (select == 0 || select === "0") {
      console.log(chalk.yellow("Saindo do programa. Até logo!"));
      break;
    }
    running = await askContinue();
    if (!running) console.log(chalk.yellow("Saindo do programa. Até logo!"));
  }
}

prompt.start();
main();

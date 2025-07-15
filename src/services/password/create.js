import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("\nGerando senha..."));
  const password = await handle();
  if (password) {
    console.log(chalk.green.bold("Senha gerada com sucesso:"));
    console.log(chalk.yellowBright(password));
  } else {
    console.log(chalk.red("Não foi possível gerar a senha."));
  }
}

export default createPassword;

import chalk from "chalk";
import handle from "./handle.js";

// Função responsável por gerar e exibir uma senha segura
async function createPassword() {
  console.log(chalk.green("\nGerando senha..."));
  // Gera a senha usando as regras definidas no .env
  const password = await handle();
  if (password) {
    console.log(chalk.green.bold("Senha gerada com sucesso:"));
    console.log(chalk.yellowBright(password));
  } else {
    console.log(chalk.red("Não foi possível gerar a senha."));
  }
}

export default createPassword;

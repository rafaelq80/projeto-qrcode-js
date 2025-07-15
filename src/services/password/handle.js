import permittedCharacters from "./utils/permitted-characters.js";
import chalk from "chalk";

async function handle() {
  let characters = [];
  let password = "";

  const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10);
  characters = await permittedCharacters();

  if (!characters || characters.length === 0) {
    console.log(chalk.red("Erro: Nenhum caractere permitido para gerar a senha. Verifique as configurações."));
    return null;
  }
  if (!passwordLength || passwordLength < 4) {
    console.log(chalk.red("Erro: Tamanho da senha inválido. Defina a variável PASSWORD_LENGTH (mínimo 4)."));
    return null;
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;

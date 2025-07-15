import permittedCharacters from "./utils/permitted-characters.js";
import chalk from "chalk";

// Função que gera a senha baseada nas regras do .env
async function handle() {
  let characters = [];
  let password = "";

  // Obtém o tamanho da senha a partir do .env
  const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10);
  // Obtém os caracteres permitidos de acordo com as regras do .env
  characters = await permittedCharacters();

  // Valida se há caracteres permitidos
  if (!characters || characters.length === 0) {
    console.log(chalk.red("Erro: Nenhum caractere permitido para gerar a senha. Verifique as configurações."));
    return null;
  }
  // Valida se o tamanho da senha é válido
  if (!passwordLength || passwordLength < 4) {
    console.log(chalk.red("Erro: Tamanho da senha inválido. Defina a variável PASSWORD_LENGTH (mínimo 4)."));
    return null;
  }

  // Gera a senha aleatória
  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;

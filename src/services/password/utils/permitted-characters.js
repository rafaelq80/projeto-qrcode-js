// Função que retorna um array com todos os caracteres permitidos para a senha
async function permittedCharacters() {
  let permitted = [];

  // Adiciona letras maiúsculas se permitido
  if (process.env.UPPERCASE_LETTERS === "true")
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  // Adiciona letras minúsculas se permitido
  if (process.env.LOWERCASE_LETTERS === "true")
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");

  // Adiciona números se permitido
  if (process.env.NUMBERS === "true") permitted.push(..."0123456789");

  // Adiciona caracteres especiais se permitido
  if (process.env.SPECIAL_CHARACTERS === "true")
    permitted.push(..."!@#$%^&*()-_");

  return permitted;
}

export default permittedCharacters;

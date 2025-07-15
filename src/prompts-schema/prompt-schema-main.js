import chalk from "chalk";

// Schema do prompt principal do menu
const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a opção desejada: "
    ),
    pattern: /^[0-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 0, 1 e 2"),
    required: true,
  },
];

export default promptSchemaMain;

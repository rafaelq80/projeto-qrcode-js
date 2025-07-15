import qr from "qrcode-terminal";
import chalk from "chalk";
import prompt from "prompt";
import fs from "fs";
import path from "path";
import qrcode from "qrcode";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Caminho absoluto para a raiz do projeto
const projectRoot = path.resolve(__dirname, '../../../');

function extractSiteName(link) {
  const tldsCompostos = [
    "com.br", "org.br", "gov.br", "edu.br", "net.br"
    // Adicione outros TLDs compostos conforme necessário
  ];
  try {
    let urlStr = link;
    if (!/^https?:\/\//i.test(link)) {
      urlStr = 'http://' + link;
    }
    const url = new URL(urlStr);
    let hostname = url.hostname.replace(/^www\./, "");
    // Verifica se termina com TLD composto
    for (const tld of tldsCompostos) {
      if (hostname.endsWith("." + tld)) {
        // Remove o TLD composto e pega o último pedaço restante
        const semTld = hostname.slice(0, -1 * (tld.length + 1));
        const parts = semTld.split(".");
        return parts[parts.length - 1];
      }
    }
    // Caso não seja TLD composto, pega o penúltimo elemento
    const parts = hostname.split(".");
    if (parts.length >= 2) {
      return parts[parts.length - 2];
    }
    return parts[0];
  } catch {
    // Tenta extrair domínio manualmente
    const match = link.match(/([a-zA-Z0-9-]+)\.[a-zA-Z]{2,}/);
    if (match) return match[1];
    return "qrcode";
  }
}

async function handle(err, result) {
  if (err) {
    console.log(chalk.red("Erro ao processar o prompt."));
    return;
  }
  if (!result.link || typeof result.link !== "string" || result.link.trim() === "") {
    console.log(chalk.red("Erro: O link para gerar o QR Code não pode ser vazio."));
    return;
  }

  const isSmall = result.type == 2;

  qr.generate(result.link, { small: isSmall }, (qrcodeText) => {
    console.log(chalk.green("\nQR Code gerado com sucesso:\n"));
    console.log(qrcodeText);
  });

  // Perguntar se deseja salvar como imagem usando prompt
  const promptSchemaSave = [
    {
      name: "saveImage",
      description: chalk.yellow("Deseja salvar o QR Code como imagem PNG na pasta public? (s/n)"),
      pattern: /^[snSN]$/,
      message: chalk.red("Digite 's' para sim ou 'n' para não."),
      required: true,
    },
  ];
  const { saveImage } = await prompt.get(promptSchemaSave);

  if (saveImage.toLowerCase() === 's') {
    const publicDir = path.join(projectRoot, 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }
    const siteName = extractSiteName(result.link);
    const fileName = `qrcode_${siteName}_${Date.now()}.png`;
    const filePath = path.join(publicDir, fileName);
    try {
      await qrcode.toFile(filePath, result.link);
      console.log(chalk.green(`Imagem salva em: ${filePath}`));
    } catch (e) {
      console.log(chalk.red("Erro ao salvar a imagem do QR Code:"), e.message);
    }
  }
}

export default handle;

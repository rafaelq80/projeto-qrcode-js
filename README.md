<h1>Desafio de projeto - Gerador de QRCode & Senha</h1>

<br />

<div align="center">
	<img src="https://i.imgur.com/r9lrbPG.png" title="source: imgur.com" width="35%"/>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/github/languages/top/rafaelq80/projeto-mario-kart-race?style=flat-square" />
  <img src="https://img.shields.io/github/repo-size/rafaelq80/projeto-mario-kart-race?style=flat-square" />
  <img src="https://img.shields.io/github/languages/count/rafaelq80/projeto-mario-kart-race?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/rafaelq80/projeto-mario-kart-race?style=flat-square" />
  <img src="https://img.shields.io/github/issues/rafaelq80/projeto-mario-kart-race?style=flat-square" />
  <img src="https://img.shields.io/github/issues-pr/rafaelq80/projeto-mario-kart-race?style=flat-square" />
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen" alt="Status: Concluído">

</div>

Utilitário CLI (Command Line Interface) em **Node.js** para **geração de QR Codes** e **senhas seguras** — ideal para uso em **e-commerces**, **ambientes corporativos** e **aplicações web** em geral.

<br />

- ## ⚙️ Funcionalidades

  - 📎 **Gerar QR Code** a partir de um link:
    - Exibição no terminal ou como imagem `.png`
    - Salva automaticamente na pasta `public/` com nome baseado no domínio
  - 🔒 **Gerar senha segura** com critérios personalizáveis:
    - Letras maiúsculas, minúsculas, números, símbolos e tamanho ajustável
  - 🧭 **Menu interativo** e fácil de usar direto no terminal

<br />

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd projeto-qrcode
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz com os critérios da senha:

```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```

> ⚠️ Caso alguma dessas variáveis esteja como `false`, o respectivo tipo de caractere será ignorado. Caso todas as variáveis estejam com o valor `false` a aplicação não funcionará.

<br />

## ▶️ Como Usar

Execute o projeto via terminal:

```bash
node src/index.js
```

### Menu Interativo

```
   UTILITÁRIOS PARA E-COMMERCE   
------------------------------------------
Bem-vindo ao kit de utilidades para e-commerce!
Escolha uma opção:
  [1] Gerar QR Code
  [2] Gerar Senha Segura
  [0] Sair
```

#### Opção [1] – Gerar QR Code

- Informe o link desejado
- Escolha o tipo:
  - `1 - NORMAL`: abre uma janela de visualização ou salva como imagem
  - `2 - TERMINAL`: exibe o QR Code diretamente no terminal
- Pode salvar como imagem PNG na pasta `public/`

#### Opção [2] – Gerar Senha Segura

- Gera uma senha aleatória baseada nas regras definidas no `.env`

#### Opção [0] – Sair

- Finaliza a execução do programa

<br />

## 💡 Exemplo de Uso

```bash
$ node src/index.js

Digite a opção desejada: 1
Digite o link para gerar o QR CODE: www.uol.com.br
Escolha entre o tipo de QRcode 
1- NORMAL 
2- TERMINAL
Digite a opção desejada: 1

QR Code gerado com sucesso!
Deseja salvar o QR Code como imagem PNG na pasta public? (s/n): s
Imagem salva em: ./public/qrcode_uol_1680000000000.png
```

<br />

## 📁 Observações

- A pasta `public/` é criada automaticamente ao salvar o QR Code como imagem
- O nome do arquivo segue o padrão: `qrcode_<domínio>_<timestamp>.png`
- O projeto utiliza apenas bibliotecas **open source** e leves

<br />

## 📚 Dependências Utilizadas

| Biblioteca                                                   | Função                                       |
| ------------------------------------------------------------ | -------------------------------------------- |
| [`prompt`](https://www.npmjs.com/package/prompt)             | Interface interativa no terminal             |
| [`chalk`](https://www.npmjs.com/package/chalk)               | Estilização de texto no terminal             |
| [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal) | Geração de QR Code no terminal               |
| [`qrcode`](https://www.npmjs.com/package/qrcode)             | Geração e exportação de QR Codes como imagem |

<br />

## 📄 Licença

Este projeto tem como foco o **aprendizado prático de Node.js**, modularização, leitura de variáveis de ambiente e interação com o usuário via CLI. Serve como base para soluções reais em sistemas de autenticação, links compartilháveis ou geração de credenciais seguras.

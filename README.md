<h1 align="center">
   <img src="Documentacao/GitReadMe/logo.png?raw=true" width="300" />
</h1>
<br><br><br><br>

# Content
- [Overview](#overview)
- [Preview](#preview)
- [Requirements](#requirements)
- [Install](#install-and-deploy)
<br>

# Overview

<p>Criado na 5ª edição do Rocketseat NLW, sob a orientação do instrutor Rodrigo Gonçalves, o PlantManager é um aplicativo desenvolvido utilizando
React Native, e tem por objetivo ajudar o usuário a lembrar da hora de regar suas plantas, de forma bem organizada.</p>
<br>
<p><strong>By </strong>Thiago de Andrade</p

# Preview

<div>
<div align="center">
   <br>
   <img src="Documentacao/GitReadMe/android.gif" width="200" height="352"  />
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="Documentacao/GitReadMe/iphone8.gif" width="200" />
</div>
   <br>
    <div align="center">
       <h3>
          <img src="Documentacao/GitReadMe/androidLogo.png?raw=true" width="80" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="Documentacao/GitReadMe/iosLogo.jpg?raw=true" width="80" /> 
   </div>
   <br>
   <a href="https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate?node-id=0%3A1">Link para o layout oficial no Figma</a>
</div>
<br>

# Requirements

- [x] Vscode para facilitar a execução dos comandos e modificar algum código no projeto caso queira
- [x] NodeJs
- [x] Android studio e android virtual device (AVD) criado para rodar a aplicação é uma das opções
- [x] Um celular android para rodar a aplicação é uma das opções
- [x] Um celular Iphone para rodar a aplicação (unica maneira no Windows para sistema ios) é uma das opções
- [x] Expo go deve estar instalado no aparelho escolhido para rodar a aplicação
- [x] Os passos da instalação e deploy foram feitos em uma maquina com Windows 


<br>

# Install and deploy

* Clone o repositório ou faça o download do .zip e extraia em uma pasta no windows

* A partir da pasta principal do projeto (/plantmanager) execute o comando abaixo para instalar as dependencias:
```bash
npm install
```
* Descruba o seu endereço de IPv4 no prompt de comando do windows pelo seguinte comando: 
```bash
ipconfig
```
* No projeto, substitua na linha 4 do arquivo api.ts com o Ip que se encontra, pelo da sua máquina. No proximo passo vamos iniciar o servidor da API

* A partir da pasta principal do projeto(/plantmanager) execute o comando abaixo substituindo o IP pelo da sua máquina:
```bash
npx json-server ./src/services/server.json --host <IP> --port 3333
```
* Agora vamos fazer o deploy da aplicação, execute o comando abaixo a partir da pasta principal do projeto:
```bash
expo start
```

* A partir desse momento será carregado uma pagina no browser (caso não carregar, entre no endereço <strong> http://localhost:19002</strong>)

* Por ela você terá varias opções para para iniciar a aplicação, que ficam no lado inferior esquerdo da tela

* Qualquer duvida ou problema na execução dos passos pode entrar em contato


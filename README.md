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

<p>  Created in the 5th edition of Rocketseat NLW, under the mentorship of instructor Rodrigo Gonçalves, PlantManager is an application created in
React Native, and its purpose is to help the user remember the time to water their plants, in a well-organized way.</p>
<br>

# Preview

<div>
<div align="center">
   <br>
   <img src="Documentacao/GitReadMe/androidLogo.png" width="200" />
   &nbsp;&nbsp;&nbsp;
   <img src="Documentacao/GitReadMe/android.gif" width="200" height="352"  />
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="Documentacao/GitReadMe/iphone5s.gif" width="200" />
   &nbsp;&nbsp;&nbsp;
   <img src="Documentacao/GitReadMe/iosLogo.jpg" width="200" />
   
</div>
   <br>
   <a href="https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate?node-id=0%3A1">Link para o layout oficial no Figma</a>

</div>
<br>

# Requirements

- [x] Vscode
- [x] NodeJs
- [x] Android studio and android virtual device (AVD) created for running the application is one option
- [x] Real Android device for running the application if you are using windows is one option
- [x] Real Iphone device for running the application if you are using Windows is one option
- [x] Expo go installed on the chosen device for running the application
- [x] Os passos da instalação e deploy foram feitos em uma maquina com Windows 


<br>

# Install and deploy

Clone o repositório ou faça o download do .zip e extraia em uma pasta no windows

A partir da pasta principal do projeto (/plantmanager) execute o comando abaixo para instalar as dependencias:
```bash
npm install
```
Descruba o seu endereço de IPv4 no prompt de comando do windows pelo seguinte comando: 
```bash
ipconfig
```
No projeto, substitua na linha 4 do arquivo api.ts com o Ip que se encontra, pelo da sua máquina, agora vamos iniciar o servidor da API

A partir da pasta principal do projeto(/plantmanager) execute o comando abaixo substituindo o IP pelo da sua máquina:
```bash
npx json-server ./src/services/server.json --host <IP> --port 3333
```
Agora vamos iniciar de fato a aplicação, execute o comando abaixo a partir da pasta principal do projeto:
```bash
expo start
```

A partir desse momento será carregado uma pagina no browser (caso não carregar, entre no endereço <strong> http://localhost:19002</strong>)

Por ela você terá varias opções para para iniciar a aplicação escolhendo alguma opção do lado inferior esquerdo da tela

Qualquer duvida ou problema na execução dos passos pode entrar em contato.


# Escala OBS

Este projeto é uma aplicação web simples desenvolvida em HTML e JavaScript que permite que os usuários registrem suas disponibilidades para um determinado mês. A aplicação envia os dados para uma planilha do Google Sheets usando Google Apps Script, permitindo a organização de escalas.

Funcionalidades

Seleção de Mês: O usuário pode selecionar o mês para o qual deseja registrar sua disponibilidade.
Seleção de Dias Disponíveis: O usuário pode marcar os dias do mês em que está disponível, ou indicar que está indisponível para aquele mês.
Envio para Planilha: Os dados de disponibilidade (nome, mês e dias) são enviados automaticamente para uma planilha no Google Sheets usando Google Apps Script.
Feedback de Sucesso e Erro: O usuário recebe um feedback visual sobre o envio da solicitação, incluindo uma mensagem de sucesso ou erro.

Tecnologias Utilizadas

HTML: Para a estrutura da página.
CSS: Para o estilo e layout da página.
JavaScript: Para manipulação do DOM, validação e envio de dados.
Google Apps Script: Para integrar com o Google Sheets e registrar os dados enviados.

Como Rodar
1. Clone o Repositório
Clone este repositório para sua máquina local para começar a trabalhar com o código.
git clone https://github.com/seunome/Escala_Obs.git

3. Acesse o Arquivo HTML
Abra o arquivo index.html no seu navegador. Não há necessidade de instalar um servidor local, pois este é um projeto simples em HTML, CSS e JavaScript.

4. Configure o Google Apps Script
A aplicação depende de um Google Apps Script para enviar os dados para o Google Sheets.
Você precisa configurar o script em seu Google Drive e obter o URL do script de execução.
Substitua a URL do seu Google Apps Script na linha 127 do arquivo script.js:
const response = await fetch('https://script.google.com/macros/s/AKfycbwukn-WcfDjDJCX2OR2hYGxV38pS2G67_*********_8O9Df83UzaMgUHr2-ZuY1FP/exec')

5. Google Sheets
Certifique-se de ter uma planilha configurada no Google Sheets para receber os dados. A planilha deve ter colunas para:
Nome do usuário
Mês
Dias Disponíveis
O Google Apps Script deve ser configurado para processar os dados e inserir os valores na planilha corretamente.

Como Funciona

O usuário seleciona o mês e os dias disponíveis ou marca a opção de indisponibilidade.
Após enviar o formulário, os dados são enviados para o Google Apps Script, que processa e insere os dados na planilha do Google Sheets.
Se o envio for bem-sucedido, o usuário verá uma mensagem de sucesso. Caso contrário, uma mensagem de erro será exibida.

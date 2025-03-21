# 🗓 Escala OBS

Este projeto é uma aplicação web simples desenvolvida em HTML e JavaScript que permite que os usuários registrem suas disponibilidades para um determinado mês.
A aplicação envia os dados para uma planilha do Google Sheets usando Google Apps Script, permitindo a organização de escalas.
Se o envio for bem-sucedido, o usuário verá uma mensagem de sucesso. Caso contrário, uma mensagem de erro será exibida.

## ⚙️ Funcionalidades

- **Seleção de Mês**: O usuário pode selecionar o mês para o qual deseja registrar sua disponibilidade.
- **Seleção de Dias Disponíveis**: O usuário pode marcar os dias do mês em que está disponível ou indicar que está **indisponível** para aquele mês.
- **Envio para Planilha**: Os dados de disponibilidade (nome, mês e dias) são enviados automaticamente para uma planilha no Google Sheets usando Google Apps Script.
- **Feedback de Sucesso e Erro**: O usuário recebe um feedback visual sobre o envio da solicitação, incluindo uma mensagem de sucesso ou erro.

## 🛠 Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo e layout da página.
- **JavaScript**: Para manipulação do DOM, validação e envio de dados.
- **Google Apps Script**: Para integrar com o Google Sheets e registrar os dados enviados.

## 🚀 Como Rodar

1. **Clone o Repositório**
   Clone este repositório para sua máquina local para começar a trabalhar com o código.
   ```bash
   git clone https://github.com/seunome/Escala_Obs.git


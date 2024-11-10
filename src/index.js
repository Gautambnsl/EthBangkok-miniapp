const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


const webAppUrl = 'https://win-chain.vercel.app/';

const bot = new TelegramBot(process.env.TOKEN, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

// Handle /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome!', {
    reply_markup: {
      keyboard: [[{ text: 'Open App', web_app: { url: webAppUrl } }]],
    },
  });
});

app.listen(8000, () => console.log('Server running on port 8000'));
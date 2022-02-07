const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
  intents: [
    'GUILDS'
  ]
});

client.on('ready', () => {
  console.log('The bot is ready to receive events and interact with Discord.');
});

client.login(process.env.TOKEN).then(() => { console.log('Connection success' )});

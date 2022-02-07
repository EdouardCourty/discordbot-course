const Discord = require('discord.js');

const config = require('./data/config.json');

const client = new Discord.Client({
  intents: [
    'GUILDS'
  ]
});

client.on('ready', () => {
  console.log('The bot is ready to receive events and interact with Discord.');
});

client.login(config.TOKEN).then(() => { console.log('Connection success' )});

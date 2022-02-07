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

/**
 * @see https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-messageCreate
 */
client.on('messageCreate', (message) => {
  console.log(`A message has been sent by ${message.author.username}: ${message.content}`);
});

client.login(process.env.TOKEN).then(() => { console.log('Connection success' )});

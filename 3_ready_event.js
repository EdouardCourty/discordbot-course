const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
  intents: [
    'GUILD_MESSAGES'
  ]
});

/**
 * @see https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-ready
 */
client.on('ready', () => {
  console.log('The bot is ready to receive events and interact with Discord.');
});

client.login(process.env.TOKEN).then(() => { console.log('Connection success' )});

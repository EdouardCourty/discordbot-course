const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
  intents: [
    'GUILD_MESSAGES'
  ]
});

client.on('ready', () => {
  console.log('The bot is ready to receive events and interact with Discord.');
});

const COMMAND_PREFIX = '!';

client.on('messageCreate', async (message) => {
  if (!message.author.bot && message.content.startsWith(COMMAND_PREFIX)) {
    // L'auteur du message n'est pas un bot, et le message commence par le préfix qu'on a défini, c'est donc une commande
    const words = message.content.split(' ');
    const commandName = words[0].slice(1);
    const arguments = words.slice(1);

    if (commandName === 'test') {
      await message.delete();
      await message.channel.send('Le message a été supprimé.');
    }

    if (commandName === 'delete') {
      await message.channel.bulkDelete(arguments[0] + 1);
    }
  }
});

client.login(process.env.TOKEN);

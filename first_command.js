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

client.on('messageCreate', async (message) => {
  if (message.content === '!hello') {
    await message.reply('Hi! How are you?');
    return;
  }

  if (message.content === '!avatar') {
    const avatarURL = message.author.avatarURL();

    await message.channel.send(`Your avatar URL is the following: ${avatarURL}`);
  }

  if (message.content === '!disconnect') {
    await message.channel.send('Discnnecting.');
    client.destroy();
    process.exit();
  }
});

client.login(config.TOKEN);

const Discord = require('discord.js');

const CLIENT_TOKEN = 'OTM5NjQ5NDYyNTg5MDg3NzQ1.Yf76wQ.dVpv9qFdyinnMpxsN0jkcpt9CIk';

const client = new Discord.Client({
  intents: [
    'GUILDS'
  ]
});

client.on('ready', () => {
  console.log('The bot is ready to receive events and interact with Discord.');
});

client.login(CLIENT_TOKEN).then(() => { console.log('Connection success' )});

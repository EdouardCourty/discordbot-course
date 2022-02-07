const Discord = require('discord.js');

const CLIENT_TOKEN = 'OTM5NjQ5NDYyNTg5MDg3NzQ1.Yf76wQ.dVpv9qFdyinnMpxsN0jkcpt9CIk';

const client = new Discord.Client({
  intents: [
    'GUILDS'
  ]
});

client.login(CLIENT_TOKEN)
  .then((token) => {
    console.log('Login success! Token used: ' + token);
  }).catch((error) => {
    console.error(error);
  });

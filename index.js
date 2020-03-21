const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
client.on("ready", () => {
    client.user.setActivity("for !help", { type: "WATCHING"})
})

client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
//common pharses
if (message.content === 'foo') {
    message.channel.send('bar');
};

if (!message.content.startsWith(prefix) || message.author.bot) return;

//commands
  if (message.content === '!ping') {
      // send back "Pong." to the channel the message was sent in
      message.channel.send('Pong!');
  };
});

// Main Dependencies
const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;
clbot.configure({botapi: settings.botapi});

client.on("ready", () => {
  console.log(`My name is Barry Allen and I am the fastest man alive!!!!`);
  client.user.setGame(`dm me for a good convo ;)`);
})

client.on("message", function(message) {
  clbot.write(message.content, (response) => {
    message.channel.startTyping();
      setTimeout(function() {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (2 - 5) + 2 * 4000);
    });
  }
);

client.login(settings.token);

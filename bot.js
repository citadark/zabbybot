// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//defines prefix
const prefix = '-';

client.on('message', msg => {
	//commands
	//the prefix !msg designates it as important!
  if (!msg.content.startsWith(prefix)) return; 
  
  if (msg.content.startsWith(prefix + 'hai')){
    msg.channel.send('hai! > u <');
  } else
  if (msg.content.startsWith(prefix + 'help')){
	  msg.channel.send("hi! i'm a bot coded by wren to do cool stuff, eventually. it's a little buggy!");
  }
	  
});

client.login(process.env.DISCORD_TOKEN);
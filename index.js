const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client();
const fetch = require("node-fetch");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.DISCORD_TOKEN);

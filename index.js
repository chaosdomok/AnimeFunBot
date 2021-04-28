const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fetch = require("node-fetch").default

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberADD', guildMember => {
    let wlecomeRole = guildMember.guild.roles.cache.find(role => role.name === '(🛑) Nie Zweryfikowany')

    guildMember.roles.add(wlecomeRole)
    guildMember.guild.channels.cache.get('835214262720004186').send(`Hej <@${guildMember.user.id}> witaj na **AnimeFun**`)
})

client.on('guildMemberRemove', guildMember => {
    guildMember.guild.channels.cache.get('835427841008074783').send(`Żegnaj <@${guildMember.user.id}> mamy nadzieje że jescze tu wrócisz`)
})

client.login(process.env.DISCORD_TOKEN);
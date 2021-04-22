const Discord = require('discord.js')

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] })

const prefix = '-'

const fs = require('fs')
const { cpuUsage } = require('process')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.on('ready', () => {
    console.log('AnimeFunBot jest online!')
})
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '(💎) Nowy Minecrafter')

    guildMember.roles.add(welcomeRole)
    guildMember.guild.channels.cache.get('814032918460366902').send('Witaj w klasie 7 <@${guildMember.user.id}>')
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args)
    }
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args)
    }
    if (command === 'kick') {
        client.commands.get('kick').execute(message, args)
    }
})

client.login('NzQ1NTE5Mjk4MzQ0Mzg2NjAy.Xzy88w.BKepDgKhrLggoN7ZiqZDBrSpHDc')
module.exports = {
    name: 'ban',
    description: 'komenda do banowania użytkowników',
    execute(client, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return
        if (!message.guild.me.hasPermission("BAN_MEMBER")) return message.reply('nie mam uprawnień do zbanowania tego użytkownika!')
        let member = message.mentions.members.first()
        if (!member) return message.reply('nie podałeś użytkownika do zbanowania!')
        let reason = args.slice(1).join(" ")
        if (!reason) reason = "Nie podano powodu bana"

        const embed = new Discord.MessageEmbed()
            .setTitle('zostałeś zbanowany')
            .setDescription(`Zostałeś zbanowany przez **${message.guild.name}** za **${reason}**`)
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
            .setColor("RANDOM")

        if (member.bannable) {
            member.send(embed).catch(error => message.channel.send('Nie udało się wysłać wiadomości do wspomnianego użytkownika'))
                .then(m => member.ban({ reason }))
            message.channel.send(`**${member.user.tag}** został zbanowany`)
        } else {
            message.reply('nie udało się zbanować wspomnianego użytkownika')
        }
    }
}
module.exports = {
    name: 'kick',
    description: "Komenda która wyrzuca użytkowników!",
    execute(message, args) {
        const member = message.mentions.users.first()
        if (member) {
            const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.kick()
            message.channel.send("Użytkownik został wyrzucony")
        } else {
            message.channel.send("Nie możesz wyrzucić tego użytkownika")
        }
    }
}
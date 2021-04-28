module.exports = {
    name: 'clear',
    description: "Komenda usuwająca wiadomości!",
    async execute(client, message, args) {
        if (!args[0]) return message.reply("Prosze podać liczbe wiadomości do usunięcia!")
        if (isNaN(args[0])) return message.reply("Proszę podać prawdziwą liczbe!")

        if (args[0] > 100) return message.reply("Nie możesz usunąć więcej niż 100 wiadomości!")
        if (args[0] < 1) return message.reply("Nie możesz podać liczby mniejszej niż 1!")

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
        })
    }
}
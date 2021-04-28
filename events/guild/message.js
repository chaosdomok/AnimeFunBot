const fetch = require("node-fetch").default
require('dotenv').config()
module.exports = (Discord, client, message) => {
    if (message.author.bot || message.channel.type === "dm") return
    if (message.channel.id === "835214263143497752") {
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=0sJZn9q2vhOz4pETsEzWtDsCtUXaCPsK`)
            .then(response => response.json())
            .then(data => {
                message.channel.send(data.response)
            })
    }

    const prefix = process.env.PREFIX
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()

    const command = client.commands.get(cmd)

    if (command) command.execute(client, message, args, Discord)
}
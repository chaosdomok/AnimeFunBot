const fetch = require("node-fetch").default
require('dotenv').config()
module.exports = (Discord, client, message) => {

    const prefix = process.env.PREFIX
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    if (message.channel.id === "835214263143497752") {
        fetch(`http://clerverbot.luxbot.ml:44236/${args.join('745519298344386602')[1]}`)
            .then(response => {
                console.log(response.opd);
            });
    }
    const cmd = args.shift().toLowerCase()

    const command = client.commands.get(cmd)

    if (command) command.execute(client, message, args, Discord)
}
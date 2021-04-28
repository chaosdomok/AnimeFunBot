module.exports = {
    name: 'ping',
    description: "Komenda która odpowiada pong!",
    execute(client, message, args) {
        message.channel.send('pong!')
    }
}
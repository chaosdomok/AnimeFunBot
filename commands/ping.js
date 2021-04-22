module.exports = {
    name: 'ping',
    description: "Komenda która odpowiada pong!",
    execute(message, args) {
        message.channel.send('pong!')
    }
}
module.exports = async(client) => {
    const guild = client.guilds.cache.get('835214262322331721')
    setInterval(() => {
        const memberCount = guild.memberCount
        const channel = guild.channels.cache.get('836262559127437412')
        channel.setName(`Użytkownicy: ${memberCount.toLocaleString()}`)
        console.log('Aktualizowanie ilości użytkowników')
    }, 5000)
}
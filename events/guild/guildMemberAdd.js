const {MessageEmbed} = require('discord.js');

module.exports = (client, guild, member) = {
  client.channels.cache.get('835214262720004186').send(new MessageEmbed().setColor(`GREEN`).setTitle('Witamy!').setDescription(`Witaj ${member} na serwerze ${guild.name}! Baw się dobrze!)
}

const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'lactation',
  description: 'Art depicting erotic lactation',
  aliases: [],
  emoji: '',
  userperm: ['SEND_MESSAGES'],
  botperm: ['SEND_MESSAGES'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!message.channel.nsfw) return message.reply('Not an NSFW Channel!');
    client.reddit
      .lactation()
      .then((rlist) => {
        const img = rlist.data.url_overridden_by_dest;

        message.channel.send({ content: img }).then((msg) => {
          msg.react('👍');
          msg.react('👎');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

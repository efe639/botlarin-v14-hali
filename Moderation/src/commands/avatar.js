const { EmbedBuilder } = require("discord.js");

module.exports = {
    conf: {
        aliases: ["avt"],
        name: "avatar",
        owner: false,
        enabled: true
    },

    run: async (client, message, args, embed, timeout) => {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        message.reply({ content: member.displayAvatarURL({ forceStatic: true }) })
    }
} 
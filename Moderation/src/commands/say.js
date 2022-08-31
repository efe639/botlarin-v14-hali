const { EmbedBuilder } = require("discord.js");

module.exports = {
    conf: {
        aliases: ["say"],
        name: "say",
        owner: false,
        enabled: true
    },

    run: async (client, message, args, timeout) => {

        const embed = new EmbedBuilder()
        let toplamuser = message.guild.memberCount;
        let ses = message.guild.members.cache.filter(ktria => ktria.voice.channel).size
        let boost = message.guild.premiumSubscriptionCount;
        
        message.channel.send({ embeds: [embed.setDescription(`
        \`•\` Sunucumuzda **${ses}** üye seste.
        \`•\` Sunucumuzda toplam **${toplamuser}** üye bulunmaktadır.
        \`•\` Sunucumuzda toplam **${boost}** boost basılmış.`)]})



    }
} 
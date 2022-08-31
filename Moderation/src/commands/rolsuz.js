const { EmbedBuilder } = require("discord.js");



module.exports = {
    conf: {
        aliases: ["rolsuzver"],
        name: "rolsuz",
        owner: false,
        enabled: true
    },

    run: async (client, message, args, embed, timeout) => {

        if (!message.member.roles.cache.some(r => ["1000850401505062933"].includes(r.id)) && !message.member.permissions.has("ADMINISTRATOR")) return;
        message.guild.members.cache.filter(ktria => ktria.roles.cache.size <= 1).forEach(ktria => ktria.roles.add("1000850401811255396").catch(e => {}))
        await message.reply({content: `dağıtım başlanıldı`})


    }
} 
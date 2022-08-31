const { EmbedBuilder } = require("discord.js");

module.exports = {
    conf: {
        aliases: ["rb"],
        name: "rb",
        owner: false,
        enabled: true
    },

    run: async (client, message, args, timeout) => {

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(s => s.name.toLowerCase().includes(args.slice(0).join(' ')))

        if (!role) return message.channel.send({content:`bir rol belirt`}).sil(7);
        let uyeler = role.members;
        let rolrenk = role.hexColor;

         message.reply(`
- ${role} rol bilgileri;
- Rol Rengi: \`${rolrenk}\`
- Rol ID: \`${role.id}\`
- Rol kişi sayısı: \`${uyeler.size}\`
─────────────────
- Roldeki kişiler;
${uyeler.map(s => `${s} - (\`${s.id}\`)`).join('\n')}
    `, {split: true})



    }
} 
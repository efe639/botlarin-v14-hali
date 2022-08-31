const { EmbedBuilder } = require("discord.js");
const { roles, staffs, panels} = require("../../../settings.js");
const data = require("../../schemas/kayitData.js");
module.exports = {    
    conf: {
        aliases: ["erkek"],
        name: "e",
        owner: false,
        enabled: true
    },

    run: async (client, message, args, timeout) => {
        const embed = new EmbedBuilder().setColor("#3498DB").setAuthor({ name: message.member.displayName, iconURL: message.author.avatarURL({ dynamic: true }) })
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply({ content: `bir kullanıcı belirtip tekrar deneyin` }).then(timeout).catch(() => { });
        if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply({ content: `sizinle aynı / üst bir kullanıcıya işlem yapamazsınız!` }).then(message.react("    ")).then(timeout).catch(() => { });
        if (roles.man.some(role => member.roles.cache.has(role)) || roles.woman.some(role => member.roles.cache.has(role))) return message.channel.send(`Belirtilen kullanıcı zaten erkek / kadın olarak kayıt işlemini yaptırmış!`).then(message.react("🚫"))
        let nick = args[1];
        let age = args[2];
        if(!nick) return message.reply({content: `bir isim belirtin`})
        if(!age) return message.reply({content: `bir yaş belirtin`})
        message.react("👌")
        member.setNickname(`${nick} | ${age}`)
        message.reply({embeds: [embed.setDescription(`${member} kullanıcısı sunucumuzda **erkek** olarak kayıt edildi.`)]})
        member.roles.add(roles.man)
        await data.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { Erkek: 1, Kadın:1 , }, }, { upsert: true });
    }
} 

   //args.filter(arg => isNaN(arg)).map(arg => arg.charAt(0).replace('i', "İ").toUpperCase() + arg.slice(1)).join(" ");
const { EmbedBuilder } = require("discord.js");

module.exports = {
    conf: {
        aliases: [],
        name: "rl",
        owner: true,
        enabled: true
    },

    run: async (client, message, args, embed, timeout) => {

        message.channel.send(`**__Bot__ yeniden başlatılıyor.**`).then(msg => {
            console.log(`${message.author.tag} --> [YENİDEN BAŞLATMA]`)
            process.exit(0);
        }
        )
}

} 
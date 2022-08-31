const fs = require("fs");
const {EmbedBuilder} = require("discord.js")
const client = global.client
fs.readdir("./src/commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`../commands/${file}`);
        let commandName = file.split(".")[0];
        if (!props.conf) return;
        if (props && props.conf.enabled) client.commands.set(props.conf.name, props);
        if (props.conf.aliases && props.conf.aliases.length) props.conf.aliases.forEach(aliase => client.aliases.set(aliase, props));
    });
    console.log(`${client.commands.size} Commands Uploaded.`);
});




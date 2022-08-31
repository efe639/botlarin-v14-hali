const Discord = require("discord.js");
const settings = require("../../../settings.js");
module.exports = async () => {
    setInterval(() => {
        const playing = settings.panels.bio;
        const index = Math.floor(Math.random() * (playing.length));
        client.user.setPresence({
            activities: [
                { name: `${playing[index]}`, }], status: settings.panels.status,
        });
    }, 10000);
}
module.exports.event = {
    name: "ready"
}
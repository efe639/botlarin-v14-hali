const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js")
const mongoose = require('mongoose');

const client = global.client = new Client({
    fetchAllMembers: true,
    intents: Object.keys(GatewayIntentBits),
    partials: Object.keys(Partials),
})

mongoose.connect("MONGONUZ",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Collection()
require("./src/handlers/eventsHandler.js");
require("./src/handlers/commandsHandler.js");
const vortex = require("../settings.js");

client.login(vortex.tokens.moderation).then(() => {
    console.log(`${client.user.tag} Bot Login!`)
}).catch(() => {
    console.error();
});

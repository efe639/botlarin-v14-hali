const { Schema, model } = require("mongoose");

const schema = Schema({
	userID: { type: String, default: "" },
	guildID: { type: String, default: "" },
	Erkek: { type: Number, default: 0 },
    Kadın: { type: Number, default: 0 }
});

module.exports = model("ktria_register", schema);
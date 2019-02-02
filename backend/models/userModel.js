const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String},
    password: { type: String },
    tasks: {type: Array}
});

module.exports = mongoose.model("user", userSchema)



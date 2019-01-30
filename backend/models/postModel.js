const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String },
    priority: { type: String },
    additionalNotes: { type: String},
    date: {type: String}
});


module.exports = mongoose.model("post", postSchema);
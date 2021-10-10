const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    likes: Number,
    text: String,
    name: String,
});
const MessageModel = mongoose.model('Message', MessageSchema);
module.exports = MessageModel;
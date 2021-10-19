const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    text: {type: String, required: true},
    name: {type: String, required: true},
    likes_count: { type: Number, default: 0 },
    likes: Array,
    created_at: {type:Date, default: Date.now()}
});
const MessageModel = mongoose.model('Message', MessageSchema);
module.exports = MessageModel;
import {CommonSchema} from "./common";
import {Schema} from "mongoose";
import {userSchema} from "./user";
const messageSchema = new Schema({
    text: {type: String},
    sender: userSchema,
    reply_message: {type: String, default: null},
    likes_count: { type: Number, default: 0 },
    likes: [],
    type: {type: String, required: true},
    chat_id: {type: String, required: true},
})
export const MessageModel = CommonSchema(messageSchema, "Message");

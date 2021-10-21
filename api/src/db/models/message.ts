import {model} from "mongoose";
import {CommonSchema} from "./common";
import {UserModel} from "./user";

const MessageSchema = CommonSchema({
    text: {type: String, required: true},
    sender: UserModel,
    reply_message: {type: String, default: null},
    likes_count: { type: Number, default: 0 },
    likes: Array,
    type: {type: String, required: true},
    chat_id: {type: String, required: true},
});

export const MessageModel = model("Message", MessageSchema);

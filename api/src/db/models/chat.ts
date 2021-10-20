import {model} from "mongoose"
import {CommonSchema} from "./common";

const ChatSchema = CommonSchema({
    users: [],
});

export const ChatModel = model('Chat', ChatSchema);
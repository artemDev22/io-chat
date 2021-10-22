import {Schema} from "mongoose";
import {CommonSchema} from "./common";
const chatSchema = new Schema({
    users: []
})
export const ChatModel = CommonSchema(chatSchema, "Chat");



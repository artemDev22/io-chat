import {CommonSchema} from "./common";
import {Schema} from "mongoose";

export const userSchema = new Schema({
    name: {type: String, required: true, unique: true},
    online: {type: Boolean, default: true},
})

export const UserModel = CommonSchema(userSchema, "User");

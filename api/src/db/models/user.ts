import {model} from "mongoose";
import {CommonSchema} from "./common";

const UserSchema = CommonSchema({
    name: {type: String, required: true, unique: true},
});

export const UserModel = model('User', UserSchema);

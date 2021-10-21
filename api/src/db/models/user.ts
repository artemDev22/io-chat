import {model} from "mongoose";
import {CommonSchema} from "./common";

const UserSchema = CommonSchema({
    name: {type: String, required: true, unique: true},
    online: {type: Boolean, default: true},
});

export const UserModel = model("User", UserSchema);

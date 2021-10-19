const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    created_at: {type:Date, default: Date.now()},
});
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
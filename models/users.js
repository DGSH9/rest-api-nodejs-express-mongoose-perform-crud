const mongoose = require("mongoose");

userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number }
})

const User = mongoose.model("User", userSchema)

module.exports = User;
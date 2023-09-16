const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    Education : {
        type: String,
        required: true,
    },
    Skills: {
        type: String,
        required: true,
    },
    WorkExperience: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("abouts", userSchema)
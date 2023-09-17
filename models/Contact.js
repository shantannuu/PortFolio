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
    description: {
        type:String,
        required:true,
        minlength: 10,
    }
}, { timestamps: true })

module.exports = mongoose.model("contacts", userSchema)
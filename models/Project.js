const mongoose = require("mongoose");

const descriptionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    shortDescription: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,
    },
    description: [descriptionSchema],
    image: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        required: true,

    },
    publisher: {
        type: String,
        required: true,

    },
}, { timestamps: true })

module.exports = mongoose.model("projects", projectSchema)
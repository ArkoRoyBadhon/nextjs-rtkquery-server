const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    id: {
        type: Number,
        // required: true
    },
    link: {
        type: String,
        required: true,
        // unique: true
    }
})

// create collection
const SlideData = new mongoose.model("slideimg", imageSchema)

module.exports = SlideData;
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    }
})

// create collection
const Mensdata = new mongoose.model("MenList", menSchema)

module.exports = Mensdata;


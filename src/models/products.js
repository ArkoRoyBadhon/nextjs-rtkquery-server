const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        // required: true
    },
    price: {
        type: Number
    }
})

// create collection
const Productdata = new mongoose.model("product", productSchema)

module.exports = Productdata;


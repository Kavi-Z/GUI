const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

name : {type: String, required:[ true,"please enter the name"]},
price : {type: Number, required: true},
description : {type: String, required: true},
// image : {type: String, required: true},


});

const Product= mongoose.model("Product",productSchema);

module.exports = Product;
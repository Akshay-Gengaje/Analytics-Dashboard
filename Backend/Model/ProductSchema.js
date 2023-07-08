const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  id : String,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  sold: Boolean,
  dateOfSale: Date,
});

exports.Product = mongoose.model("Product", ProductSchema);

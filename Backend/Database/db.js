const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();
const model = require("../Model/ProductSchema");
const Product = model.Product;
const MONGODB_URL = process.env.MONGODB_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to the database");
    return "connected"
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return "Failed To Connect"
  }
};

module.exports = connectDB;

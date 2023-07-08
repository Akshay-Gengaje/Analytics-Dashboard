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
    await seedData();
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

// Data initialized in DB with third party api
const seedData = async () => {
  try {
    await Product.deleteMany({});
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    const data = response.data;
    await Product.insertMany(data);
    console.log("Seed data inserted into the database");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

module.exports = connectDB;

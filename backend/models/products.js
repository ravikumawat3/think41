// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: String,
  title: String,
  description: String,
  category: String,
  price: Number,
  rating: Number,
  image: String
});

module.exports = mongoose.model('Product', ProductSchema);
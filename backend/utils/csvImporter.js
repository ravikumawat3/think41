// utils/csvImporter.js
const fs = require('fs');
const csv = require('csv-parser');
const Product = require('../models/product');
console.log("Product model loaded");


const importCSV = async (csvFilePath) => {
  const products = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        products.push({
          productId: row.id,
          title: row.title,
          description: row.description,
          category: row.category,
          price: parseFloat(row.price),
          rating: parseFloat(row.rating),
          image: row.image
        });
      })
      .on('end', async () => {
        try {
          await Product.insertMany(products);
          console.log("CSV data imported successfully.");
          resolve();
        } catch (err) {
          console.error("Error importing data:", err);
          reject(err);
        }
      });
  });
};

module.exports = importCSV;

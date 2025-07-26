// app.js
const connectDB = require('./db');
const importCSV = require('./utils/csvImporter');
require('dotenv').config();

(async () => {
  await connectDB();
  await importCSV('./data/products.csv');
})();

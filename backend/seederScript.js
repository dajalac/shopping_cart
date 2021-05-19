 require('dotenv').config();

 const productsData = require('./data/productsList');
 const connectDB = require("./config/db");
 const Product = require('./models/ProductSchema');

 connectDB();

 // clear the db and insert the items criated 
 const importData = async() =>{
     try {
         await Product.deleteMany({});
         await Product.insertMany(productsData);

         console.log(' Data import SUCCESS');
         process.exit();
     } catch (error) {
         console.error('Data import FAIL')
         process.exit(1);
         
     }
 }

 importData();

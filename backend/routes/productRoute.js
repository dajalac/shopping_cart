const express = require('express');
const router = express.Router();

const {getAllProducts,getProductById} = require('../controller/productController')

//get all products from db.
//@route GET /api/products

router.get('/',getAllProducts);

//get  products by ID from db.
//@route GET /api/products/:id

router.get('/:id', getProductById);

module.exports = router; 
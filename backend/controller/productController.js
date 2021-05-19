const product = require('../models/ProductSchema');

const getAllProducts = async(req,res)=>{
    try {
        const productItems = await product.find({});

        res.json(productItems)
    } catch (error) {
        console.error(error, 'unable to get all items')
        res.status(500).json({message:'server error!'})
    }
};

const getProductById = async(req,res)=>{
    try {
        const productItem = await product.findById(req.params.id);

        res.json(productItem)
    } catch (error) {
        console.error(error, 'unable to get product id ')
        res.status(500).json({message:'server error!'})
    }
};

module.exports={
    getProductById,
    getAllProducts
}




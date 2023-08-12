const productSchema = require('../model/ProductModel');

const addProduct = async (req,res) => {

    const product = new productSchema(req.body);
    const result = await product.save();
    if(result){
        res.status(201).json({
            message:"Product added successfully",
            data:result
        })
    }
    else{
        res.status(500).json({
            message:"Something went wrong"
        })
    }

}

const getProduct = async (req,res) => {

    const products = await productSchema.find().populate('category');
    if(products){
        res.status(200).json({
            message:"Products fetched successfully",
            data:products
        })
    }
    else{
        res.status(500).json({
            message:"Something went wrong"
        })
    }

}

module.exports = {
    addProduct,
    getProduct
}
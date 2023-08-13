const productSchema = require("../model/ProductModel");

const addProduct = async (req, res) => {
  const product = new productSchema(req.body);
  const result = await product.save();
  if (result) {
    res.status(201).json({
      message: "Product added successfully",
      data: result,
    });
  } else {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getProduct = async (req, res) => {
  const products = await productSchema.find().populate("category");
  if (products) {
    res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } else {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const addVaeiantToProduct = async (req, res) => {
  var productId = req.params.id;
  var variant = req.body.variant;

  //updateVariant using push method
  const result = await productSchema.findByIdAndUpdate(productId, {
    $push: { variants: variant },
  });
  if (result) {
    res.status(201).json({
      message: "Variant added successfully",
      data: result,
    });
  } else {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const removeVariantFromProduct = async (req, res) => {
    var productId = req.params.id;
    var variant = req.body.variant;
  
    //updateVariant using push method
    const result = await productSchema.findByIdAndUpdate(productId, {
      $pull: { variants: variant },
    });
    if (result) {
      res.status(201).json({
        message: "Variant added successfully",
        data: result,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  };
  
const getProductByStatus = async (req, res) => {

    const status = req.params.status;
    const products = await productSchema.find({status:status}).populate("category");
    if (products) {
        res.status(200).json({
            message: "Products fetched successfully",
            data: products,
        });
    }
    else{
        res.status(500).json({
            message: "Something went wrong",
        });
    }

} 
  
module.exports = {
  addProduct,
  getProduct,
    addVaeiantToProduct,
    removeVariantFromProduct,
    getProductByStatus
};

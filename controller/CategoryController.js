const categorySchema = require('../model/CategoryModel');

const addCategory = async (req,res) => {

    const category = new categorySchema(req.body);
    const result = await category.save();
    if(result){
        res.status(201).json({
            message:"Category added successfully",
            data:result
        })
    }
    else{
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}
module.exports = {
    addCategory
}
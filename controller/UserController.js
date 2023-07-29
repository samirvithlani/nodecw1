const userSchema = require("../model/UserModel");

const getUsers = (req, res) => {


    userSchema.find().then((data)=>{
        res.status(200).json({
            message:"success",
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"error",
            error:err
        })
    })

}

const addUser = (req,res)=>{

    // form , req.body,params
    const user = new userSchema(req.body);
    user.save().then((data)=>{
        res.status(201).json({
            message:"user added",
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"error",
            error:err
        })
    })
    

}

module.exports = {
    getUsers,
    addUser
}
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

// const deleteUser = (req,res)=>{

//     var id = req.params.id;
//     userSchema.findByIdAndDelete(id).then((data)=>{
//         res.status(200).json({
//             message:"user deleted",
//             data:data
//         })
//     }).catch((err)=>{
//         res.status(500).json({
//             message:"error",
//             error:err
//         })
//     })

// }

const deleteUser = (req,res)=>{

    var id = req.params.id;
    userSchema.findById(id).then((data)=>{
        if(data){
            userSchema.findByIdAndDelete(id).then((data)=>{
                res.status(200).json({
                    message:"user deleted",
                    data:data
                })
            }).catch((err)=>{
                res.status(500).json({
                    message:"error",
                    error:err
                })
            })
        }
        else{
            res.status(404).json({
                message:"user not found"
            })
        }
    }).catch((err)=>{
        res.status(500).json({
            message:"error",
            error:err
        })
    })
}

const updateUser = (req,res)=>{


    var id = req.params.id; //id
    var data = req.body; ///update data
    userSchema.findByIdAndUpdate(id,req.body).then((data)=>{
        res.status(200).json({
            message:"user updated",
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
    addUser,
    deleteUser,
    updateUser
}
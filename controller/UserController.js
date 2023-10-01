const { aggregate } = require("../model/UserModel");
const userSchema = require("../model/UserModel");
const passwordUtil = require("../util/PasswordUtil");
const tokenUtil = require("../util/TokenUtil");



const loginUser = async(req,res)=>{


    //select * from users where email = "" and password = ""
    var Uemail = req.body.email;
    var Upassword = req.body.password;

    const user = await userSchema.findOne({email:Uemail,password:Upassword});
    console.log(user);
    if(user){
        res.status(200).json({
            message:"login success",
            data:user
        })
    }
    else{
        res.status(404).json({
            message:"invalid credentials"
        })
    }



}



const loginWithEcn = async(req,res)=>{


    var email = req.body.email;
    var password = req.body.password;

    //dhiraj1@gmail.com
    const userObj = await userSchema.findOne({email:email});
    console.log(userObj);
    const token = tokenUtil.generateToken(userObj.toObject());
    console.log(token);
    if(userObj){

            if(await passwordUtil.comparePassword(password,userObj.password)){
                res.status(200).json({
                    message:"login success",
                    data:token
                })
            }
            else{
                res.status(404).json({
                    message:"invalid credentials"
                })
            }

    }
    else{
        res.status(404).json({
            message:"invalid credentials"
        })
    }




}

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


const addUserwithEnc = async(req,res)=>{

    // form , req.body,params
    //const user = new userSchema(req.body);
    const userObj = {
        name:req.body.name,
        email:req.body.email,
        password:await passwordUtil.encryptPassword(req.body.password),
        age:req.body.age
    }
    const user = new userSchema(userObj);
    var token = tokenUtil.generateToken(user.toObject());
    user.save().then((data)=>{
        res.status(201).json({
            message:"user added",
            data:token
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
    updateUser,
    loginUser,
    addUserwithEnc,
    loginWithEcn
}
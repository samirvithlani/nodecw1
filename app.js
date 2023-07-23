const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userSchema = require("./model/UserModel");

const PORT = 3000;

//server start....

//localhostL:3000/test
var users = [
    {
        name:"abc",
        age:20
    },{
        name:"xyz",
        age:30
    }
]
app.get("/test",(req,res)=>{
    console.log("test api called");
    res.send("test api called");
})

app.get("/test1",(req,res)=>{
    res.json({
        message:"ok",
        
    })
})

app.get("/test2",(req,res)=>{
    res.status(201).json({
        message:"data fetched successfully",
        data:users
    })
})
//localhost:3000/test3/101
app.get("/test3/:id",(req,res)=>{

    var id = req.params.id;
    console.log("id is",id);
    res.status(201).json({
        message:"data fetched successfully",
        id:id
    })
    
})

app.get("/users",(req,res)=>{

    //users.find()
    userSchema.find().then((data)=>{

        res.status(200).json({
            users:data,
            message:"data fetched successfully"
        })

    }).catch((err)=>{

        res.status(500).json({
            message:"error",
            error:err
        })

    })

})



//user --> 101


mongoose.connect("mongodb://127.0.0.1:27017/cw1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("error..",err);
})

app.listen(PORT, () => {
  console.log("server started on port 3000");
});

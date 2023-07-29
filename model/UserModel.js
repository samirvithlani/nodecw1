const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    age:{
        type:Number,
    },
    password:{
        type:String,
        required:true
    }

})
// mongoose.model("users",userSchema)
// module.exports = userSchema;

module.exports = mongoose.model("users",userSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:true
    },
    // colors:[
    //     {
    //         name:{
    //             type:String,
    //         }
    //     }
    // ],
    variants:[
        {
            type:String,
        }
    ],
        
    category:{
        type:Schema.Types.ObjectId,
        ref:'category'
    }
})
module.exports = mongoose.model('product',productSchema);
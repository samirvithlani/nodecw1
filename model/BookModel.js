const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    name:{
        type: String,
    },
    price:{
        type: Number,
    },
    qty:{
        type: Number,
    },
    genere:{
        type: String,
    },
    ratings:{
        type: Number,
    },
    // bookImageUrl:{
    //     type: String,
    // },
    googleDriveId:{
        type: String,
    }
    


},{
    timestamps: true
})

module.exports = mongoose.model('Book', BookSchema);
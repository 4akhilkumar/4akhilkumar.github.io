const mongoose = require('mongoose');

const Schema = mongoose.Schema
let donateSchema = new Schema({
    userid :{
        type:Schema.Types.ObjectId,
        required:true
    },
    name :{
        type:String,
        required:true
    },
    money :{
        type:String,
        required:true
    },

    phone :{
        type:Number,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    lplace :{
        type:String,
        required:true
    }
})

donateSchema=mongoose.model("donates",donateSchema);

module.exports=donateSchema;
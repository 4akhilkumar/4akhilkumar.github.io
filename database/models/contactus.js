const mongoose = require('mongoose');

const Schema = mongoose.Schema
let contactusSchema = new Schema({
    name :{
        type:String,
        required:true
    },
    contactus :{
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
    }
})

contactusSchema=mongoose.model("contactuss",contactusSchema);

module.exports=contactusSchema;
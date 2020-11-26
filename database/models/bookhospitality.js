const mongoose = require('mongoose');

const Schema = mongoose.Schema
let bookhospitalitySchema = new Schema({
    userid :{
        type:Schema.Types.ObjectId,
        required:true
    },
    place :{
        type:String,
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
    doa :{
        type:String,
        required:true
    },
    dod :{
        type:String,
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

bookhospitalitySchema=mongoose.model("bookhospitalitys",bookhospitalitySchema);

module.exports=bookhospitalitySchema;
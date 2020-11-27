const Bookhospitality=require('../models/bookhospitality');
const express=require('express');
const { request } = require('http');

const BookhospitalityRoute=express.Router();


BookhospitalityRoute.route('/bookhospitality').post((req, res) => {
      Bookhospitality.create(req.body)
      .then((resp)=>{
          res.statusCode=200
          res.json(resp)
      })
      .catch((error)=>console.log(error))
})

BookhospitalityRoute.route('/getbookhospitalitys/:id').get((req,res,next)=>{
    console.log(req.params.id) 
    Bookhospitality.find({userid:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=BookhospitalityRoute;
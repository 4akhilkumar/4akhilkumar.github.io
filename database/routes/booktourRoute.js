const Booktour=require('../models/booktour');
const express=require('express');
const { request } = require('http');

const BooktourRoute=express.Router();

BooktourRoute.route('/booktour').post((req, res) => {
      Booktour.create(req.body)
      .then((resp)=>{
          res.statusCode=200
          res.json(resp)
      })
      .catch((error)=>console.log(error))
})

BooktourRoute.route('/getbooktours/:id').get((req,res,next)=>{
    console.log(req.params.id) 
    Booktour.find({userid:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=BooktourRoute;
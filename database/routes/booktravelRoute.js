const Booktravel=require('../models/booktravel');
const express=require('express');
const { request } = require('http');

const BooktravelRoute=express.Router();


BooktravelRoute.route('/booktravel').post((req, res) => {
      Booktravel.create(req.body)
      .then((resp)=>{
          res.statusCode=200
          res.json(resp)
      })
      .catch((error)=>console.log(error))
})

BooktravelRoute.route('/getbooktravels/:id').get((req,res,next)=>{
    console.log(req.params.id) 
    Booktravel.find({userid:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=BooktravelRoute;
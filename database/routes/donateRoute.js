const Donate=require('../models/donate');
const express=require('express');
const { request } = require('http');

const DonateRoute=express.Router();


DonateRoute.route('/donate').post((req, res) => {
      Donate.create(req.body)
      .then((resp)=>{
          res.statusCode=200
          res.json(resp)
      })
      .catch((error)=>console.log(error))
})

DonateRoute.route('/getdonates/:id').get((req,res,next)=>{
    console.log(req.params.id) 
    Donate.find({userid:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=DonateRoute;
const contactus=require('../models/contactus');
const express=require('express');
const { request } = require('http');

const contactusRoute=express.Router();


contactusRoute.route('/contactus').post((req, res) => {
    contactus.create(req.body)
      .then((resp)=>{
          res.statusCode=200
          res.json(resp)
      })
      .catch((error)=>console.log(error))
})

module.exports=contactusRoute;
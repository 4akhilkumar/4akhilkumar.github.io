const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const user=require('../models/user');
const express=require('express');
const UserRoute=express.Router();

let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let seconds = date_ob.getSeconds();
let minutes = date_ob.getMinutes();
let hours = date_ob.getHours();
 
var nodemailer = require('nodemailer'); 
  
let transporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: '4projtest@gmail.com', 
        pass: 'TESTINGgmail@20'
    } 
});

var decodedToken='';
function verifyToken(req, res, next) {
    let token=req.query.token;
    console.log(token);
    jwt.verify(token,'4848SecretKey',(err,tokendata)=>{
        if(err)
            return res.status(401).send('Unauthorized request')
        if(tokendata){
            decodedToken=tokendata
            console.log(decodedToken)
            next()
        }
    })
}

UserRoute.route('/register').post((req, res) => {
    let User = new user({
      name : req.body.name,
      email : req.body.email,
      password : bcrypt.hashSync(req.body.password, 10)
    })
    user.findOne({email:req.body.email},(error,u)=>{
        if(u)
        return res.status(409).send('Email Already Exists');
        else{
            User.save((error, registeredUser) => {
                if (error) {
                    console.log("Error While Registering User To Database...!\n" + error)
                } else {
                    let token =  jwt.sign({id:registeredUser._id}, '4848SecretKey')
                    res.status(200).send({token})
                    // The Code Lines to send E - Mail
                    let mailOptions = {
                        from: 'nareddy1119@gmail.com',
                        to: req.body.email,
                        subject: 'Welcome to WhiN!',
                        html: '<html><body><div class="w3-container"><h2>Thank You, For registering. </h2><p>Your account is created using the following Details:</p></div></body></html>' + "Email Address: "+ req.body.email +"<br />Date: "+date + "-" + month + "-" + year + "<br />Time: " + hours + " Hrs:" + minutes + " Min:" + seconds + " Sec",
                    };

                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                        console.log(error);
                        } else {
                        console.log('Email sent: ' + info.response);
                        }
                    });
                    // The Code Lines to send E - Mail
                }
            })
        }
    })  
})

UserRoute.route('/login').post((req, res) => { 
    user.findOne({email: req.body.email}, (error, u) => {
        if (error) {
            console.log( error)
        } else {
           if (!u) {
              res.status(401).send("Invalid Email...!")
           } else if (bcrypt.compareSync(req.body.password, u.password)){
              let token =  jwt.sign({id:u._id}, '4848SecretKey')
              res.status(200).send({token})
              // The Code Lines to send E - Mail
              let mailOptions = {
                from: 'nareddy1119@gmail.com',
                to: req.body.email,
                subject: 'Login Activity Found!',
                html: '<html><body><div class="w3-container"><h2>We noticed a login activity from your account. </h2><p>The account had login using the following Details:</p></div></body></html>' + "Email Address: "+ req.body.email +"<br />Date: "+date + "-" + month + "-" + year + "<br />Time: " + hours + " Hrs:" + minutes + " Min:" + seconds + " Sec",
               };

              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              // The Code Lines to send E - Mail
           } else {
              res.status(401).send("Invalid Password...!")
           }
        }
    })
})

UserRoute.route('/profile/:id').get((req,res,next)=>{
    user.findOne({_id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

UserRoute.route('/edit-profile/:id').patch((req,res,next)=>{
    user.findById(req.params.id,(err,data)=>{
        if (err) next(err)
        else {
        data.name=req.body.name;
        data.addr=req.body.addr;
        data.city=req.body.city;
        data.dob=req.body.dob;
        data.gender=req.body.gender;
        data.pincode=req.body.pincode;
        data.phone=req.body.phone;
        data.email=req.body.email;
        data
          .save()
          .then((data) => {
            res.json("Edit Done");
          })
          .catch((err) => res.status(409).send("failed"));
        }
  });
})

UserRoute.route('/userid').get(verifyToken,(req,res,next)=>{
    return res.status(200).json(decodedToken.id)
})

UserRoute.route('/username/:id').get((req,res,next)=>{
    user.findOne({_id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.username);
    }, (err) => next(err))
    .catch((err) => next(err));
})

UserRoute.route('/name/:id').get((req,res,next)=>{
    user.findOne({_id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.name);
    }, (err) => next(err))
    .catch((err) => next(err));
})

UserRoute.route('/delete/:id').delete((req,res,next)=>{
    user.deleteOne({_id:req.params.id})
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        // res.status(200).send("Removed Successfully")
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=UserRoute;
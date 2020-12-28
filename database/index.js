const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv=require('dotenv');
const connection = mongoose.connection;
const app = express();
dotenv.config({path:"./config.env"});
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://Database4WhiN:Database4WhiN@whin.wbc8o.mongodb.net/WhiN?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

connection.once('open', () => console.log("connected to the mongodb"));

const booktravelRoute=require('./routes/booktravelRoute');
const booktourRoute=require('./routes/booktourRoute');
const bookhospitalityRoute=require('./routes/bookhospitalityRoute');
const donateRoute=require('./routes/donateRoute');
const contactusRoute=require('./routes/contactusRoute');
const userRoute=require('./routes/userRoute');
const { default: axios } = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/booktravel',booktravelRoute);
app.use('/booktour',booktourRoute);
app.use('/bookhospitality',bookhospitalityRoute);
app.use('/donate',donateRoute);
app.use('/contactus',contactusRoute);
app.use('/user',userRoute);

// app.post('/verify', (req,res) => {
//     var secretKey = '6LfiBhQaAAAAALj72o9LBq7ruMMJe_WgCDIYK8WZ';
//     var userKey = req.body.token;
//     axios.post('https://www.google.com/recaptcha/api/siteverify?secret='+secretKey+'&response='+userKey).then(response => {
//         console.log("got response ", response.data)
//         if(response.data.success) {
//             return res.status(200).json({
//                 response: "Verification Successful"
//             });
//         }
//         return res.status(401).json({
//             error: "Verification Failed"
//         });
//         }).catch(error => {
//             res.status(500).json({
//               error: "Server Not Responding"  
//             })
//     });
// });

app.post('/verify', (req, res)=>{
      
    let token = req.body.recaptcha;
    const secretKey = "6Le12RcaAAAAALpdg6kdxf9oRpQNIKadGdhZBK9C";
    
    const url =  `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${req.connection.remoteAddress}`    
    if(token === null || token === undefined){
      res.status(201).send({success: false, message: "Token is empty or invalid"})
      return console.log("token empty");
    }
    
    request(url, function(err, response, body){
      body = JSON.parse(body);
      if(body.success !== undefined && !data.success){
           res.send({success: false, 'message': "recaptcha failed"});
           return console.log("failed")
       }
       res.send({"success": true, 'message': "recaptcha passed"});
    })
  });

app.listen(port, () => console.log(`running on the server ${port}`));

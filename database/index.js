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

app.use(cors());
app.use(bodyParser.json());
app.use('/booktravel',booktravelRoute);
app.use('/booktour',booktourRoute);
app.use('/bookhospitality',bookhospitalityRoute);
app.use('/donate',donateRoute);
app.use('/contactus',contactusRoute);
app.use('/user',userRoute);

app.listen(port, () => console.log(`running on the server ${port}`));

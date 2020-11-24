const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression=require('compression');
const dotenv=require('dotenv');
const helmet=require('helmet');
const path=require('path');
const connection = mongoose.connection;
const app = express();
dotenv.config({path:"./config.env"})
const port = process.env.port || 3000;

mongoose.connect('mongodb+srv://WhiN:MongoDBaccount2020@whin.m1ctd.mongodb.net/WhiN?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

connection.once('open', () => console.log("connected to the mongodb"));


const UserRoute=require('./routes/userRoute');
const booktravelRoute=require('./routes/booktravelRoute');
const booktourRoute=require('./routes/booktourRoute');
const bookhospitalityRoute=require('./routes/bookhospitalityRoute');
const donateRoute=require('./routes/donateRoute');
const contactusRoute=require('./routes/contactusRoute');

app.use(compression());
app.use(express.static(process.cwd() + "/whin/dist/whin"));
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", "https:", "http:", "data:", "ws:"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "http:", "data:"],
        scriptSrc: ["'self'", "https:", "http:", "blob:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:", "http:"],
      },
    })
);

app.use(cors());
app.use(bodyParser.json());
app.use('/user',UserRoute);
app.use('/booktravel',booktravelRoute);
app.use('/booktour',booktourRoute);
app.use('/bookhospitality',bookhospitalityRoute);
app.use('/donate',donateRoute);
app.use('/contactus',contactusRoute);

app.get("*", (req, res) => { 
    res.sendFile(path.resolve(process.cwd() + "/whin/dist/whin/index.html"));
});

app.listen(port, () => console.log(`running on the server ${port}`));
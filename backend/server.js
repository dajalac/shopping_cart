require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db");
const productRoute = require('./routes/productRoute')


//connection to the db
connectDB();

const app = express();
app.use(express.json());

//middleware
// redirects the htpp requests to productRoute
////This is the middleware function which will be called before any routes get hit
app.use('/api/products', productRoute);

app.listen(process.env.PORT,()=>
console.log(`server listening on port ${process.env.PORT}`))
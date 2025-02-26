require("dotenv").config(); 
const express = require("express");
const mongoose = require('mongoose');
const productRouters = require("./routers/product-routers")

const app = express();

 mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log(`Connected to Mongo db database`))
    .catch(err => console.log(`Error connecting to Mongo Db`, err));

app.use(express.json());

app.use('/products', productRouters)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));

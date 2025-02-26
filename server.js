require("dotenv").config(); 
const express = require("express");
const mongoose = require('mongoose');

const app = express();

 mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log(`Connected to Mongo db database`))
    .catch(err => console.log(`Error connecting to Mongo Db`, err));


app.use(express.json());




const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));

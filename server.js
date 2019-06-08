const express = require('express')
const mongoose = require('mongoose')
const {mongoDBUrl,PORT} = require('./config/configuration')

const app = express()

// database
mongoose.connect(mongoDBUrl,{useNewUrlParser:true})
        .then(response=>{
            console.log("MongoDB connected successfully ");
        }).catch(err=>{
            console.error('connection to MongoDB failed '+err);
        });

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// controllers


// routes


// start server
app.listen(PORT,()=>{

    console.log(`server running @ http://localhost:${PORT}`)
})
const express = require('express');
const mongoose = require('mongoose');
const {mongoDBUrl,PORT} = require('./config/configuration');

const app = express();

// database
mongoose.connect(mongoDBUrl,{useNewUrlParser:true})
        .then(response=>{
            console.log("MongoDB connected successfully ")
        }).catch(err=>{
            console.error('connection to MongoDB failed '+err)
        });

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// controllers

const UserControl = require('./controllers/UserController');

// routes
app.post('/api/user/create',UserControl.create);
app.get('/api/user',UserControl.read);
app.put('/api/user/update/:id',UserControl.update);
app.delete('/api/user/:id',UserControl.delete);

// start server
app.listen(PORT,()=>{

    console.log(`server running @ http://localhost:${PORT}`)
});
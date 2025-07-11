const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

//imports Routes
const login = require('./routes/loginRoute')
const home = require('./routes/homeRoute')


app.use(express.json());

// To serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log(req.url, req.method)
    next();
})

//Handle Routes
app.use(login.router)
app.use(home.home)


exports.app = app;


const express = require('express');    
const home = express.Router();

//controller
const homeController = require('../controllers/homeController')


home.get('/', homeController)

exports.home = home;
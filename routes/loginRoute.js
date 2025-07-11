const express = require('express');    
const router = express.Router();

//controller
const loginController = require('../controllers/loginController')


router.get('/login', loginController)
router.post('/login', loginController)

exports.router = router;
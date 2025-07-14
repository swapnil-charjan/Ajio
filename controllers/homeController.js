const path = require('path');
const Product = require('../modules/product');

const homeController = (req, res, next) => {
    res.render('home.ejs', Product, {headTitle: 'AJIO - Home'});
}



module.exports = homeController;
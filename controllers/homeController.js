const path = require('path');

const homeController = (req, res, next) => {
    res.render('home.ejs', {headTitle: 'AJIO - Home'});
}

module.exports = homeController;
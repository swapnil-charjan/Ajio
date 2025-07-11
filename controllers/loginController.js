const path = require('path');

const loginController = (req, res, next) => {
    res.render('login.ejs', {headTitle: 'AJIO Login'});
}

module.exports = loginController;
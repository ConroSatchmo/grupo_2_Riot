const path = require('path');

const authController = {
    renderLogin: (req, res) => {
        res.render('login');
    },
    renderRegister: (req, res) => {
        res.render('register');
    },
}

module.exports = authController;
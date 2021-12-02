const path = require('path');

const authController = {
    renderLogin: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/login.html'));
    },
    renderRegister: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/register.html'));
    },
}

module.exports = authController;
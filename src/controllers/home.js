// const path = require('path');
const productsDB = require('./database');

const homeController = {
    renderHome: (req, res) => {
        const productos = productsDB.select()
        // console.log(productos);
        res.render('home', { productos });
    }
}

module.exports = homeController;
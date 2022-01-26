// const path = require('path');
const productsDB = require('./database');
const db = require('../database');

const homeController = {
    renderHome: (req, res) => {
        const productos = db.products.select()
        if(req.session.user){
            const userData = req.session.user;
            // console.log(req.cookies.user);
            res.render('home', {
                user: userData,
                productos
            });
        }else{

            res.render('home', { productos });
        }
        // console.log(productos);
    }
}

module.exports = homeController;
// const path = require('path');
const productsDB = require('./database');
const db = require('../database');

const homeController = {
    renderHome: (req, res) => {
        const productos = db.products.select()
        if(req.session.user){
            const {firstName, lastName, email, user, category, image} = db.users.selectById(req.session.user)
            const userData = {firstName, lastName, email, user, category, image}
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
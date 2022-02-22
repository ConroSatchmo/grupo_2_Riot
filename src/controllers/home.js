// const path = require('path');
const db = require('../database/models');

const homeController = {
    renderHome: async (req, res) => {
        const productos = await db.Products.findAll();
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
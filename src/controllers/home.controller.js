const asyncHandler = require('express-async-handler')
const DB = require('../database/models')
const Sequelize = require('sequelize')

module.exports = {
    index: asyncHandler(async (req, res) => {
        const products = await DB.Products.findAll({
            include: [
                { association: "images" },
            ],
            order: [
                [Sequelize.fn('RAND')]
            ],
            limit: 8
        })

        const userEmail = req.session.user ? req.session.user : null

        if(userEmail != null){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            res.render('home/index', { products, user })
        }

        res.render('home/index', {
            products
        })
    }),
    renderCart: asyncHandler(async (req, res) => {
        const products = await DB.Products.findAll({
            include: [
                { association: "images" },
            ],
            order: [
                [Sequelize.fn('RAND')]
            ],
            limit: 2
        })

        const userEmail = req.session.user ? req.session.user : null

        if(userEmail != null){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            res.render('home/cart', { products, user })
        }


        res.render('home/cart', {
            products
        })
    })
}
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
        res.render('home/cart', {
            products
        })
    })
}
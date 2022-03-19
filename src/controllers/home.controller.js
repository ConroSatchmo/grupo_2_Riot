const asyncHandler = require('express-async-handler')
const DB = require('../database/models')

module.exports = {
    index: asyncHandler(async (req, res) => {
        const products = await DB.Products.findAll()
        res.render('home/index', {
            title: 'Home',
            products
        })
    }),
}
const asyncHandler = require('express-async-handler')
const DB = require('../database/models')
const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

module.exports = {
    renderProducts: asyncHandler(async (req, res) => {
        // random products
        const products = await DB.Products.findAll({
            include: [
                { association: "images" },
            ]
        })

        const userEmail = req.cookies.user ? req.session.user : null

        if(userEmail){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            return res.render('products/index', { products, user })
        }


        res.render('products/index', { products })
    }),
    renderDetail: asyncHandler(async (req, res) => {
        const { id } = req.params
        const product = await DB.Products.findByPk(id, {
            include: [
                { association: "images" },
                { association: "colors" }
            ]
        })
        const colors = await DB.Colors.findAll()

        const userEmail = req.session.user ? req.session.user : null

        if(userEmail){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            return res.render('products/detail', { product, user, colors })
        }

        res.render('products/detail', { product, colors })
    }),
    renderDashboard: asyncHandler(async (req, res) => {
        const products = await DB.Products.findAll({
            include: [
                { association: "images" },
                { association: "colors" },
                { association: "brands" }
            ]
        })

        const userEmail = req.session.user ? req.session.user : null

        if(userEmail){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            return res.render('products/dashboard', { products, user })
        }

        res.render('products/dashboard', { products })
    }),
    renderCreate: asyncHandler(async (req, res) => {
        const brands = await DB.Brands.findAll()
        const colors = await DB.Colors.findAll()

        const userEmail = req.session.user ? req.session.user : null

        if(userEmail){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            return res.render('products/create', { brands, colors, user })
        }

        res.render('products/create', { brands, colors })
    }),
    create: asyncHandler(async (req, res) => {
        const product = {
            name: req.body.name,
            description: req.body.description,
            color_id: req.body.color,
            brand_id: req.body.brand,
            price: Number(req.body.price),
        }
        let images = req.files
        const newProduct = await DB.Products.create(product)
        images = images.map((image) => ({ file_name: image.filename, product_id: newProduct.id }))

        await DB.Images.bulkCreate(images)

        res.redirect('/products/dashboard')
    }),
    renderEdit: asyncHandler(async (req, res) => {
        const { id } = req.params
        const product = await DB.Products.findByPk(id, {
            include: [
                { association: "images" },
            ]
        })
        const colors = await DB.Colors.findAll()
        const brands = await DB.Brands.findAll()

        const userEmail = req.session.user ? req.session.user : null

        if(userEmail){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            return res.render('products/edit', { product, brands, colors, user })
        }

        res.render('products/edit', { product, colors, brands })
    }),
    update: asyncHandler(async (req, res) => {
        const { id } = req.params
        const product = await DB.Products.findByPk(id,
            {
                include: [
                    { association: "images" },
                ]
            }
        )
        let images = req.files

        if(images.length > 0){
            for(let i = 0; i < images.length; i++){
                fs.unlinkSync(path.join(__dirname, `../../public/images/products/${images[i].file_name}`))
                await DB.Images.destroy({
                    where: {
                        product_id: product.id
                    }
                })
            }
            images = images.map((image) => ({ file_name: image.filename, product_id: id }))
        }
        
        await DB.Products.update({
            name: req.body.name,
            description: req.body.description,
            color_id: req.body.color,
            brand_id: req.body.brand,
            price: Number(req.body.price),
        }, {
            where: { id }
        })

        await DB.Images.bulkCreate(images)

        res.redirect('/products/dashboard')
    }),
    renderDelete: asyncHandler(async (req, res) => {
        const { id } = req.params
        const product = await DB.Products.findByPk(id)

        const userEmail = req.session.user ? req.session.user : null

        if(userEmail){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            return res.render('products/delete', { product, user })
        }

        res.render('products/delete', { product })
    }),
    delete: asyncHandler(async (req, res) => {
        const { id } = req.params
        const product = await DB.Products.findByPk(id,
            {
                include: [
                    { association: "images" },
                ]
            }    
        )
        let images = product.images
        if (images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                fs.unlinkSync(path.join(__dirname, `../../public/images/products/${images[i].file_name}`))
                await DB.Images.destroy({
                    where: {
                        product_id: product.id
                    }
                })
            }
            images = images.map((image) => ({ file_name: image.file_name, product_id: id }))
        }

        await DB.Products.destroy({
            where: {
                id
            }
        })

        res.redirect('/products/dashboard')
    })
}
const asyncHandler = require('express-async-handler')
const DB = require('../database/models')
const fs = require('fs')

module.exports = {
    renderProducts: asyncHandler(async (req, res) => {
        const products = await DB.Products.findAll({
            include: [
                { association: "images" },
            ]
        })
        res.render('products', { products })
    }),
    renderDetail: asyncHandler(async (req, res) => {
        const { id } = req.params
        const product = await DB.Products.findByPk(id, {
            include: [
                { association: "images" },
            ]
        })
        res.render('products/detail', { product })
    }),
    renderCreate: (req, res) => {
        res.render('products/create')
    },
    create: asyncHandler(async (req, res) => {
        const product = {
            name: req.body.nombreDeProducto,
            description: req.body.descripcion,
            color_id: req.body.color,
            brand_id: req.body.marca,
            price: Number(req.body.precio),
        }
        let images = req.files
        const newProduct = await DB.Products.create(product)
        images = images.map((image) => ({ file_name: image.filename, product_id: newProduct.id }))

        await DB.Images.bulkCreate(images)

        res.redirect('/products')
    }),
    renderEdit: asyncHandler(async (req, res) => {
        const { id } = req.params
        const product = await DB.Products.findByPk(id)
        const colors = await DB.Colors.findAll()
        res.render('products/edit', { product, colors })
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
                fs.unlinkSync(`./images/products/${product.images[i].file_name}`)
                await DB.Images.destroy({
                    where: {
                        product_id: product.images[i].id
                    }
                })
            }
            images = images.map((image) => ({ file_name: image.filename, product_id: id }))
        }
        
        await DB.Products.update({
            name: req.body.nombreDeProducto,
            description: req.body.descripcion,
            color_id: req.body.color,
            brand_id: req.body.marca,
            price: Number(req.body.precio),
        }, {
            where: { id }
        })

        await DB.Images.bulkCreate(images)

        res.redirect('/products')
    }),
    renderDelete: asyncHandler(async (req, res) => {
        const { id } = req.params
        const product = await DB.Products.findByPk(id)
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
                fs.unlinkSync(`./images/products/${images[i].file_name}`)
                await DB.Images.destroy({
                    where: {
                        product_id: images[i].id
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

        res.redirect('/products')
    })
}
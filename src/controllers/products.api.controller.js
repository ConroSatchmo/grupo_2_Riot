const asyncHandler = require("express-async-handler")
const DB = require("../database/models")

module.exports = {
    get: asyncHandler(async (req, res) => {
        const productsDB = await DB.Products.findAll({
            include: [{ association: "images" }, { association: "colors" }, { association: "brands" }],
        })
        const brands = await DB.Brands.findAll()
        let brandperproduct = {}
        for(let i = 0; i < brands.length; i++){
            const products = productsDB.filter(product => product.brand_id === brands[i].id)
            brandperproduct[brands[i].name] = products.length
        }
        const products = productsDB.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            brand: product.brands,
            color: product.colors,
            detail: '/api/products/' + product.id,
        }))

        res.status(200).json({
            count: productsDB.length,
            countByCategory: brandperproduct,
            data: products
        })
    }),
    getById: asyncHandler(async (req, res) => {
        const productsDB = await DB.Products.findByPk(req.params.id, {
            include: [{ association: "images" }, { association: "colors" }, { association: "brands" }],
        })
        const images = productsDB.images.map(image => ({
            id: image.id,
            file_name: 'http://localhost:3000/images/products/' + image.file_name,
        }))

        const products = {
            id: productsDB.id,
            name: productsDB.name,
            price: productsDB.price,
            description: productsDB.description,
            brand: productsDB.brands,
            color: productsDB.colors,
            images: images
        }

        res.status(200).json({
            data: products
        })
    })
}
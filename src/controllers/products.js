const path = require("path");
const productsDB = require("../database/index");

const productDetailController = {
  renderProductDetail: (req, res) => {
    const { id } = req.params;
    console.log(productsDB)
    const product = productsDB.products.selectById(id);
    console.log(product)
    res.render("productDetail", { product });
  },
  renderProducts: (req, res) => {
    const products = productsDB.select();
    res.render("products", { products });
  },
  renderProductCreate: (req, res) => {
    res.render("createProduct");
  },
  renderProductEdit: (req, res) => {
    const product = productsDB.select(req.params.id);
    res.render("editProduct", { product });
  },
};

module.exports = productDetailController;

const fs = require("fs");
const path = require("path");
const imagesPath = path.join(__dirname, "../public/images/productos/");
const productsDB = require("../database/index");
const {v4: uuidv4} = require("uuid");

const productDetailController = {
  renderProductDetail: (req, res) => {
    const { id } = req.params;
    const product = productsDB.products.selectById(id);

    res.render("productDetail", { product });
  },
  renderProducts: (req, res) => {
    const products = productsDB.products.select();
    res.render("products", { products });
  },
  renderProductCreate: (req, res) => {
    res.render("createProduct");
  },
  renderProductEdit: (req, res) => {
    const product = productsDB.products.selectById(req.params.id);
    const products = productsDB.products.select();
    let colors = products.map((product) => product.color);

    let hash = {};
    colors = colors.filter(color => hash[color] ? false : hash[color] = true)

    res.render("editProduct", { product, colors });
  },
  store: (req, res) => {
    const product = {
      id: uuidv4(),
      name: req.body.nombreDeProducto,
      description: req.body.descripcion,
      color: req.body.color,
      brand: req.body.marca,
      price: Number(req.body.precio),
      images: [],
    };

    const imagenes = req.files;
    imagenes.forEach((file) => product.images.push(file.filename));

    productsDB.products.insert(product);

    res.redirect("/products");
  },
  update: (req, res) => {
    const { id } = req.params;
    const product = productsDB.products.selectById(id);
    const imagenes = req.files;

    if (imagenes.length > 0) {
      for(let i = 0; i < imagenes.length; i++) {
        fs.unlinkSync(path.join(imagesPath, product.images[i]));
      }
      imagenes.forEach((file) => product.images.push(file.filename));
    }

    product.name = req.body.nombreDeProducto;
    product.description = req.body.descripcion;
    product.color = req.body.color;
    product.brand = req.body.marca;
    product.price = Number(req.body.precio);
    
    productsDB.products.update(product);

    res.redirect("/products");
  },
  delete: (req, res) => {
    const {id} = req.params;

    const product = productsDB.products.selectById(id);
    console.log(product);
    product.images.forEach((image) => {
      fs.unlinkSync(imagesPath + image);
    });

    productsDB.products.delete(id);

    res.redirect("/products");
  },
  renderDelete: (req, res) => {
    const { id } = req.params;
    const product = productsDB.products.selectById(id);
    res.render("productdelete", { product });
  }
};

module.exports = productDetailController;

const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const createProductController = {
  store: (req, res) => {
    const product = {
      id: req.body.id,
      name: req.body.nombreDeProducto,
      description: req.body.descripcion,
      color: req.body.color,
      brand: req.body.marca,
      price: req.body.precio,
      images: req.body.imagen,
    };
    products.unshift(product);
    const productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, productJSON);
    res.redirect("/products");
  },
  edit: (req, res) => {
    const id = req.params.id;
    const productToEdit = products.filter((product) => product.id === id);
    res.render("editProduct", { product: productToEdit[0] });
  },
  update: (req, res) => {
    const id = req.params.id;
    let image;
    const { name, description, color, brand, price, images } = req.body;
    products.forEach((product) => {
      if (product.id === id) {
        if (req.file) {
          image = req.file.filename;
          fs.unlink(imagesPath + product.images, (err) => {
            if (err) throw err;
            console.log(err);
          });
        }

        product.name = name;
        product.description = description;
        product.color = color;
        product.brand = brand;
        product.price = Number(price);
        product.images = images || product.images;

        const productJSON = JSON.stringify(products);
        fs.writeFileSync(productsFilePath, productJSON);
      }
    });
    res.redirect("/products");
  },
  delete: (req, res) => {
    const id = req.params.id;
    const updateProducts = products.filter((product) => product.id != id);
    const productJSON = JSON.stringify(updateProducts);
    fs.writeFileSync(productsFilePath, productJSON);
    products.forEach((product) => {
      if (product.id === id) {
        fs.unlink(imagesPath + product.image, (err) => {
          if (err) throw err;
          console.log(err);
        });
      }
    });
    res.redirect("/products");
  },
};

module.exports = createProductController;

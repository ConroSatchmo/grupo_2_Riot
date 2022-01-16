const fs = require("fs");
const path = require("path");
const imagesPath = path.join(__dirname, "../public/images/productos/");
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const createProductController = {
  store: (req, res) => {
    const product = {
      id: Number(req.body.id),
      name: req.body.nombreDeProducto,
      description: req.body.descripcion,
      color: req.body.color,
      brand: req.body.marca,
      price: Number(req.body.precio),
      images: [],
    };

    const imagenes = req.files;
    imagenes.forEach((file) => product.images.push(file.filename));

    products.push(product);
    const productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, productJSON);

    res.redirect("/products");
  },
  update: (req, res) => {
    const id = Number(req.params.id);
    let image;
    const { nombreDeProducto, descripcion, color, marca, precio, imagen } =
      req.body;
    products.forEach((product) => {
      if (product.id === id) {
        if (req.file) {
          image = req.file.filename;
          fs.unlink(imagesPath + product.image, (err) => {
            if (err) throw err;
            console.log(err);
          });
        }

        product.name = nombreDeProducto;
        product.description = descripcion;
        product.color = color;
        product.brand = marca;
        product.price = Number(precio);
        product.images = imagen || product.images;

        const productJSON = JSON.stringify(products);
        fs.writeFileSync(productsFilePath, productJSON);
      }
    });
    res.redirect("/products");
  },
  delete: (req, res) => {
    const id = Number(req.params.id);
    const updateProducts = products.filter((product) => product.id != id);
    const productJSON = JSON.stringify(updateProducts);
    products.forEach((product) => {
      if (product.id === id) {
        product.images.forEach((imagen) => {
          fs.unlink(imagesPath + imagen, (err) => {
            if (err) throw err;
            console.log(err);
          });
        });
      }
    });
    fs.writeFileSync(productsFilePath, productJSON);
    res.redirect("/products");
  },
};

module.exports = createProductController;

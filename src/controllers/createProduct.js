const path = require("path");


const createProductController = {
  render: (req, res) => {
    res.render("createProduct");
  },
  store: (req, res) => {
    const product = {
      id: req.body.Id,
      name: req.body.nombreDeProducto,
      description: req.body.descripcion,
      color: req.body.color,
      brand: req.body.marca,
      price: req.body.precio,
      images: [
        req.body.imagenDelProducto1,
        req.body.imagenDelProducto2,
        req.body.imagenDelProducto3,
        req.body.imagenDelProducto4,
      ],
    };
    res.redirect("/products");
  },
  edit: (req, res) => {},

  delete: (req, res) => {},
};

module.exports = createProductController;

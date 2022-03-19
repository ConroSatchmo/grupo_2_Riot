const fs = require("fs");
const path = require("path");
const imagesPath = path.join(__dirname, "../public/images/productos/");
const db = require("../database/models");

const productDetailController = {
  renderProductDetail: async (req, res) => {
    const { id } = req.params;
    const product = await db.Products.findByPk(id, {
      include: [{ association: "images" }],
    });

    res.render("productDetail", { product });
  },
  renderProducts: async (req, res) => {
    const products = await db.Products.findAll({
      include: [{ association: "images" }],
    });
    console.log(products);
    res.render("products", { products });
  },
  renderProductCreate: async (req, res) => {
    const colors = await db.Colors.findAll();
    const brands = await db.Brands.findAll();
    res.render("createProduct", { colors, brands });
  },
  renderProductEdit: async (req, res) => {
    const { id } = req.params;
    const product = await db.Products.findByPk(id);
    const colors = await db.Colors.findAll();

    res.render("editProduct", { product, colors });
  },
  store: async (req, res) => {
    const product = {
      name: req.body.nombreDeProducto,
      description: req.body.descripcion,
      color_id: req.body.color,
      brand_id: req.body.marca,
      price: Number(req.body.precio),
    };

    console.log(product);

    let imagenes = req.files;
    const newProduct = await db.Products.create(product);

    imagenes = imagenes.map((imagen) => ({
      file_name: imagen.filename,
      product_id: newProduct.id,
    }));

    await db.Images.bulkCreate(imagenes);

    // imagenes.forEach((imagen) => {
    //   await db.Images.create({
    //     product_id: newProduct.id,
    //     file_name: imagen,
    //   });
    // });

    res.redirect("/products");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const product = await db.Products.findByPk(id);
    const imagenes = req.files;

    if (imagenes.length > 0) {
      for (let i = 0; i < imagenes.length; i++) {
        fs.unlinkSync(path.join(imagesPath, product.images[i]));
      }
      imagenes.forEach((file) => product.images.push(file.filename));
    }

    await product.update(
      {
        name: req.body.nombreDeProducto,
        description: req.body.descripcion,
        color: req.body.color,
        brand: req.body.marca,
        price: Number(req.body.precio),
        images: product.images,
      },
      {
        where: { id },
      }
    );

    res.redirect("/products");
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const product = await db.Products.findByPk(id);
    console.log(product);
    product.images.forEach((image) => {
      fs.unlinkSync(imagesPath + image);
    });

    await db.Products.destroy({
      where: { id },
    });

    res.redirect("/products");
  },
  renderDelete: async (req, res) => {
    const { id } = req.params;
    const product = await db.Products.findByPk(id);
    res.render("productdelete", { product });
  },
};

module.exports = productDetailController;

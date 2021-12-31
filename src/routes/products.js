const { Router } = require("express");
const router = Router();

const productsController = require("../controllers/products");

router.get("/", productsController.renderProducts);
router.get("/create", productsController.renderProductCreate);
router.get("/:id", productsController.renderProductDetail);
// router.get("/:id/edit", productsController.renderProductEdit);

// router.post("/", productsController.createProduct);

// router.put("/:id", productsController.updateProduct);

// router.delete("/:id", productsController.deleteProduct);

module.exports = router;

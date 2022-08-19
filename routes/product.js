const express = require("express");
const router = express.Router();
const productController = require('../controllers/product')

router.post("/", productController.createProduct);
router.put("/:id", productController.modifyProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/:id", productController.getOneProduct);
router.get("/", productController.getAllProducts);

module.exports = router;
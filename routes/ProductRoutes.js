const router = require('express').Router();
const productController = require('../controller/ProductController');

router.post('/product',productController.addProduct);
router.get('/product',productController.getProduct);
router.put('/addvarient/:id',productController.addVaeiantToProduct)
router.put('/removevarient/:id',productController.removeVariantFromProduct)
router.get('/product/:status',productController.getProductByStatus)
module.exports = router;
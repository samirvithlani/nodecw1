const router = require('express').Router();
const bookController = require('../controller/BookController');

router.post('/create',bookController.createBook);
router.get('/getAll',bookController.getAllBooks);
module.exports = router;
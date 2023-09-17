const router = require('express').Router();
const fileUploadController = require('../controller/FileUploadController');
router.post('/upload',fileUploadController.uploadFile);
router.get('/getall',fileUploadController.getAllFileFromGoogleDrive);
module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const authutil = require("../util/AuthUtil");
const zodmiddleware = require("../middleware/ZodMiddleware");
const userValidationSchema = require("../util/UserValidationSchema");
//router.get('/user',authutil("abc"),userController.getUsers);
const authmiddleware = require("../middleware/AuthMiddleware");

router.get('/user',authmiddleware.validateUser,userController.getUsers);

router.post('/user',zodmiddleware.validationSchema(userValidationSchema),userController.addUserwithEnc)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.post('/login',userController.loginWithEcn)  

module.exports = router;
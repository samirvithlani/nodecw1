const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const authutil = require("../util/AuthUtil");


//router.get('/user',authutil("abc"),userController.getUsers);
router.get('/user',authutil,userController.getUsers);

router.post('/user',userController.addUserwithEnc)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.post('/login',userController.loginWithEcn)  

module.exports = router;
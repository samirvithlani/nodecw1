const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
router.get('/user',userController.getUsers);
router.post('/user',userController.addUser)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)

module.exports = router;
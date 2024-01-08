const express = require('express');
const router = express.Router();
const auth = require("../middleware/userMiddleware")
const userController = require('../controller/userController');
router.post('/create', userController.createUser);
router.post('/api/login', userController.loginUser);
router.get('/',  userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id',auth, userController.deleteUser);
router.get('/:slug', userController.slug)


module.exports = router;
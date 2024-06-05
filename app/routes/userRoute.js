const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/addUser', UserController.createUser);
router.get('/getUser/:id', UserController.getUserById);
router.get('/getAllUsers', UserController.getAllUsers);
router.put('/updateUser/:id', UserController.updateUser);
router.delete('/deleteUser/:id', UserController.deleteUser);

module.exports = router;

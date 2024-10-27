const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/users', usersController.getAllUsersController);
router.post('/users', usersController.createUserController);
router.put('/users/:id', usersController.updateUserController);
router.delete('/users/:id', usersController.deleteUserController);

module.exports = router;

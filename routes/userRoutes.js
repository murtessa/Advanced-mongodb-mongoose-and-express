const express = require('express');

const userController = require('./../controllers/userController');


  const router = express.Router();

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.postUser)
  .delete(userController.deleteAllUsers);

router.route('/:id')
  .get(userController.getUser)
  .put(userController.putUser)
  .delete(userController.deleteUser);

  module.exports = router;
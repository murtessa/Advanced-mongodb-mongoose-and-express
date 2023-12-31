const express = require('express');
const postController = require( './../controllers/postController');

  const router = express.Router();

  router.route('/')
   .get(postController.getAllposts)
   .post(postController.postPosts)
   .delete(postController.deleteAllPost)


  router.route('/:id')
   .get(postController.getPosts)
   .put(postController.putPosts)
   .delete(postController.deletePost)
   
module.exports = router;
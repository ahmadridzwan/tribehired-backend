const express = require('express');
const router = express.Router();

const { getAllPosts } = require('../controllers/postController');

/* GET Posts listing. */
router.get('/', async function(req, res, next) {
  const posts = await getAllPosts();
  res.send((posts.length > 0) ? posts : 'No posts found');
});

module.exports = router;

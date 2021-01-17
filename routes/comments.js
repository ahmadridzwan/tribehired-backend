const express = require('express');
const router = express.Router();
const joi = require('joi');
const validator = require('express-joi-validation').createValidator();
const commentController = require('../controllers/commentController');

/* GET Comments listing. */
router.get('/', async function(req, res, next) {
  const comments = await commentController.getAllComments();
  res.send((comments.length > 0) ? comments : 'No comments found');
});

/* Comments search */
const querySchema = joi.object({
  query: joi.string().required(),
});

router.get('/search', validator.query(querySchema), commentController.searchComments);

module.exports = router;

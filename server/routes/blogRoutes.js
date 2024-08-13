const express = require('express');
const { createPost, getPosts } = require('../controllers/blogController');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/post', auth, createPost);
router.get('/', getPosts);

module.exports = router;

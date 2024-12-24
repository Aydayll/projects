const blogs =  require('../controllers/blogs')
const express = require('express');
const router = express.Router()

router.get('', blogs.blogs_index);
router.get('/create', blogs.blogs_create);
router.post('/:id', blogs.blogs_post);
router.delete('/:id', blogs.blogs_delete)

module.exports= router;
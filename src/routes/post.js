'use strict'
const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')

router.post('/posts', postController.createPost)
router.put('/posts/:id', postController.updatePost)
router.delete('/posts/:id', postController.deletePost)
router.get('/posts/:id', postController.getOnePost)
router.get('/posts', postController.getPosts)


module.exports = router
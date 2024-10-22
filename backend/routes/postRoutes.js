const express = require('express')
const postRouter = express.Router()
const Controllers = require('../controllers')

// GET http://localhost:8080/api/posts
postRouter.get('/', (req, res) => {
  Controllers.postController.getPosts(res)
})

// GET http://localhost:8080/api/posts/:uid
postRouter.get('/:uid', (req, res) => {
  Controllers.postController.getUserPosts(req, res)
})

// POST http://localhost:8080/api/posts/create
postRouter.post('/create', (req, res)=>{
  Controllers.postController.createPost(req, res)
})

// PUT http://localhost:8080/api/posts/:id
postRouter.put('/:id', (req, res) => {
  Controllers.postController.updatePost(req, res)
})

// DELETE http://localhost:8080/api/posts/:id
postRouter.delete('/:id', (req, res) => {
  Controllers.postController.deletePost(req, res)
})

module.exports = postRouter;
const express = require('express')
const userRouter = express.Router()
const Controllers = require('../controllers')

// GET http://localhost:8080/api/users
userRouter.get('/', (req, res) => {
  Controllers.userController.getUsers(res)
})

// POST http://localhost:8080/api/users/create
userRouter.post('/create', (req, res)=>{
  Controllers.userController.createUser(req, res)
})

// PUT http://localhost:8080/api/users/:id
userRouter.put('/:id', (req, res) => {
  Controllers.userController.updateUser(req, res)
})

// DELETE http://localhost:8080/api/users/:id
userRouter.delete('/:id', (req, res) => {
  Controllers.userController.deleteUser(req, res)
})

module.exports = userRouter;
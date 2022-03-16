const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router
  .get('/tasks', TaskController.index)
  .get('/tasks/:id', TaskController.select)
  .post('/tasks', TaskController.create)
  .put('/tasks/:id', TaskController.update)
  .delete('/tasks/:id', TaskController.delete)

module.exports = router

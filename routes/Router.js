const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router
  .get('/api/tasks', TaskController.index)
  .get('/api/tasks/:id', TaskController.select)
  .post('/api/tasks', TaskController.create)
  .put('/api/tasks/:id', TaskController.update)
  .delete('/api/tasks/:id', TaskController.delete)

module.exports = router

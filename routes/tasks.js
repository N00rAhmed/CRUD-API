const express = require('express')
const {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController')
const requireAuth = require('../middleware/requireAuth')

const Task = require('../models/TaskModel')
const router = express.Router()

// require auth for all task routes
router.use(requireAuth)

//get all tasks
router.get('/', getTasks)

//get single task
router.get('/:id', getTask)

//post new task
router.post('/', createTask)

//delete a task
router.delete('/:id', deleteTask)

//update task
router.patch('/:id', updateTask)




module.exports = router
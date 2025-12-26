const express = require('express');
const router = express.Router();
const auth = require('../middleware/mongoAuth');
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/mongoStudyController');

// GET /api/tasks - Get all tasks
router.get('/', auth, getAllTasks);

// GET /api/tasks/:id - Get task by ID
router.get('/:id', auth, getTaskById);

// POST /api/tasks - Create new task
router.post('/', auth, createTask);

// PUT /api/tasks/:id - Update task
router.put('/:id', auth, updateTask);

// DELETE /api/tasks/:id - Delete task
router.delete('/:id', auth, deleteTask);

module.exports = router;
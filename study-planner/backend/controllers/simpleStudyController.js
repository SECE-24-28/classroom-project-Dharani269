const storage = require('../data/storage');

// Get all study tasks for logged-in user
const getAllTasks = async (req, res) => {
  try {
    const tasks = storage.getTasksByUserId(req.user.id);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single task by ID
const getTaskById = async (req, res) => {
  try {
    const task = storage.findTaskById(req.params.id, req.user.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new study task
const createTask = async (req, res) => {
  try {
    const taskData = { ...req.body, userId: req.user.id };
    const task = storage.createTask(taskData);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update study task
const updateTask = async (req, res) => {
  try {
    const task = storage.updateTask(req.params.id, req.user.id, req.body);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete study task
const deleteTask = async (req, res) => {
  try {
    const task = storage.deleteTask(req.params.id, req.user.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
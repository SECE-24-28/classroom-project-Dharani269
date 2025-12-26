const Study = require('../models/SimpleStudy');

// Get all study tasks for logged-in user
const getAllTasks = async (req, res) => {
  try {
    console.log('Getting tasks for user:', req.user._id);
    const tasks = await Study.find({ userId: req.user._id }).sort({ createdAt: -1 });
    console.log('Found tasks:', tasks.length);
    res.json(tasks);
  } catch (error) {
    console.error('Get tasks error:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get single task by ID
const getTaskById = async (req, res) => {
  try {
    const task = await Study.findOne({ _id: req.params.id, userId: req.user._id });
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
    console.log('Creating task for user:', req.user._id);
    const task = new Study({ ...req.body, userId: req.user._id });
    const savedTask = await task.save();
    console.log('Task created:', savedTask._id);
    res.status(201).json(savedTask);
  } catch (error) {
    console.error('Create task error:', error);
    res.status(400).json({ message: error.message });
  }
};

// Update study task
const updateTask = async (req, res) => {
  try {
    const task = await Study.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
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
    const task = await Study.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
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
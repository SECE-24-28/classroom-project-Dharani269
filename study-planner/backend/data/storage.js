// Simple in-memory storage (no MongoDB needed)
let users = [];
let tasks = [];
let userIdCounter = 1;
let taskIdCounter = 1;

const storage = {
  // User operations
  createUser: (userData) => {
    const user = {
      id: userIdCounter++,
      ...userData,
      createdAt: new Date()
    };
    users.push(user);
    return user;
  },

  findUserByEmail: (email) => {
    return users.find(user => user.email === email);
  },

  findUserById: (id) => {
    return users.find(user => user.id == id);
  },

  // Task operations
  createTask: (taskData) => {
    const task = {
      id: taskIdCounter++,
      ...taskData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    tasks.push(task);
    return task;
  },

  getTasksByUserId: (userId) => {
    return tasks.filter(task => task.userId == userId);
  },

  findTaskById: (id, userId) => {
    return tasks.find(task => task.id == id && task.userId == userId);
  },

  updateTask: (id, userId, updateData) => {
    const taskIndex = tasks.findIndex(task => task.id == id && task.userId == userId);
    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updateData, updatedAt: new Date() };
      return tasks[taskIndex];
    }
    return null;
  },

  deleteTask: (id, userId) => {
    const taskIndex = tasks.findIndex(task => task.id == id && task.userId == userId);
    if (taskIndex !== -1) {
      return tasks.splice(taskIndex, 1)[0];
    }
    return null;
  },

  // Debug functions
  getAllUsers: () => users,
  getAllTasks: () => tasks
};

module.exports = storage;
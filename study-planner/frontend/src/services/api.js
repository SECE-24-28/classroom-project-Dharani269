import axios from 'axios';

// Base URLs for backend API
const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('Token added to request:', token.substring(0, 20) + '...');
  } else {
    console.log('No token found in localStorage');
  }
  return config;
});

// Handle 401 responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('401 error - clearing token and redirecting to login');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

// API functions for authentication
export const authAPI = {
  // Register user
  register: (userData) => api.post('/auth/register', userData),
  
  // Login user
  login: (credentials) => api.post('/auth/login', credentials),
};

// API functions for study tasks
export const studyAPI = {
  // Get all tasks
  getAllTasks: () => api.get('/tasks'),
  
  // Get task by ID
  getTaskById: (id) => api.get(`/tasks/${id}`),
  
  // Create new task
  createTask: (taskData) => api.post('/tasks', taskData),
  
  // Update task
  updateTask: (id, taskData) => api.put(`/tasks/${id}`, taskData),
  
  // Delete task
  deleteTask: (id) => api.delete(`/tasks/${id}`),
};

export default studyAPI;
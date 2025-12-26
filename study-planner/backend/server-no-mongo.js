const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/simpleAuthRoutes');
const studyRoutes = require('./routes/simpleStudyRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', studyRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Study Planner API (No MongoDB) is running!' });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!', timestamp: new Date() });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    message: 'Route not found', 
    path: req.originalUrl,
    method: req.method 
  });
});

// Start server (no database connection needed)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (No MongoDB required)`);
  console.log('Available endpoints:');
  console.log('POST http://localhost:5000/api/auth/register');
  console.log('POST http://localhost:5000/api/auth/login');
  console.log('GET  http://localhost:5000/api/tasks');
});
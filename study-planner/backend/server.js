const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Load routes with error handling
let studyRoutes, authRoutes;
try {
  studyRoutes = require('./routes/studyRoutes');
  console.log('Study routes loaded successfully');
} catch (error) {
  console.error('Error loading study routes:', error.message);
}

try {
  authRoutes = require('./routes/authRoutes');
  console.log('Auth routes loaded successfully');
} catch (error) {
  console.error('Error loading auth routes:', error.message);
  console.log('Loading simple auth routes instead...');
  authRoutes = require('./routes/simpleAuth');
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
})); // Enable CORS for frontend connection
app.use(express.json()); // Parse JSON requests

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Routes
if (authRoutes) {
  app.use('/api/auth', authRoutes);
  console.log('Auth routes mounted at /api/auth');
} else {
  console.error('Auth routes not available');
}

if (studyRoutes) {
  app.use('/api/tasks', studyRoutes);
  console.log('Study routes mounted at /api/tasks');
} else {
  console.error('Study routes not available');
}

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Study Planner API is running!' });
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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server after database connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
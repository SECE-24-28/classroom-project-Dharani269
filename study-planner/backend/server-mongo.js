const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/mongoAuthRoutes');
const studyRoutes = require('./routes/mongoStudyRoutes');

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
  console.log(`${req.method} ${req.path}`);
  if (req.headers.authorization) {
    console.log('Auth header:', req.headers.authorization.substring(0, 20) + '...');
  }
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', studyRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Study Planner API with MongoDB is running!' });
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/studyplanner')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    console.log('Starting without MongoDB...');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (MongoDB failed)`);
    });
  });
const express = require('express');
const router = express.Router();

// Simple register without database
router.post('/register', (req, res) => {
  console.log('Register endpoint hit:', req.body);
  const { name, email, password } = req.body;
  
  res.status(201).json({
    message: 'Registration successful',
    token: 'test_token_123',
    user: { id: '1', name, email }
  });
});

// Simple login without database  
router.post('/login', (req, res) => {
  console.log('Login endpoint hit:', req.body);
  const { email, password } = req.body;
  
  res.json({
    message: 'Login successful',
    token: 'test_token_123',
    user: { id: '1', name: 'Test User', email }
  });
});

module.exports = router;
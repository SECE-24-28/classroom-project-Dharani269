// Simple test to check if server starts correctly
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Test server is running!' });
});

app.post('/api/auth/register', (req, res) => {
  console.log('Register request received:', req.body);
  res.json({ message: 'Register endpoint working', data: req.body });
});

app.post('/api/auth/login', (req, res) => {
  console.log('Login request received:', req.body);
  res.json({ message: 'Login endpoint working', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log('Test these URLs in Postman:');
  console.log('GET  http://localhost:5000/');
  console.log('POST http://localhost:5000/api/auth/register');
  console.log('POST http://localhost:5000/api/auth/login');
});
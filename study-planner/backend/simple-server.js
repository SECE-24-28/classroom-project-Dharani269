const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple auth routes without database
app.post('/api/auth/register', (req, res) => {
  console.log('Register request:', req.body);
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }
  
  res.status(201).json({
    message: 'User registered successfully',
    token: 'fake_token_123',
    user: { id: '123', name, email }
  });
});

app.post('/api/auth/login', (req, res) => {
  console.log('Login request:', req.body);
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }
  
  res.json({
    message: 'Login successful',
    token: 'fake_token_123',
    user: { id: '123', name: 'Test User', email }
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Simple server running!' });
});

app.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
});
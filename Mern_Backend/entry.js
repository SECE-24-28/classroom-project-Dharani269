const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(express.json());

// MongoDB connection (FIXED)
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log("MongoDB Connection Unsuccessful", err));

// Routes
app.get('/', (req, res) => {
  res.send("Welcome to backend server");
});

app.get('/json', (req, res) => {
  res.json({
    college: "sece",
    Dept: "Cys",
    StuCount: "64"
  });
});

// Static file
app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, "Index.html"));
});

// Signup routes
app.get('/signup', (req, res) => {
  res.send("Signup page - Use POST method");
});

app.post('/signup', (req, res) => {
  const { email, username, password } = req.body;
  console.log("Signup data:", email, username, password);

  res.json({
    message: "Signup successful",
    email,
    username
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

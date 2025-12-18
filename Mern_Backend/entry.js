const express = require('express');
const mongoose = require('mongoose'); // fixed from "mdb" to "mongoose"
const path = require('path'); // for serving static files
const app = express();
const PORT = process.env.PORT || 8001;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connection Successful"))
.catch((err) => console.log("MongoDB Connection Unsuccessful", err));

// Routes
app.get('/', (req, res) => {
  res.send("Welcome to backend server");
});

app.get('/json', (req, res) => {
  res.json({
    "college": "sece",
    "Dept": "Cys",
    "StuCount": "64"
  });
});

// Serve static file
app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, "Index.html")); // fixed path syntax
});

// Signup GET route
app.get('/signup', (req, res) => {
  res.send("Signup page - Use POST method to submit signup data");
});

// Signup POST route
app.post('/signup', (req, res) => {
  const { email, username, password } = req.body;
  console.log('Received signup data:', { email, username, password });

  // Here you can add MongoDB save logic later
  res.json({
    "Message": "Signup successful",
    "data": { email, username }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

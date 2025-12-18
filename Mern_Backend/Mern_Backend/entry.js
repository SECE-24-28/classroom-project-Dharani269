// entry.js

const express = require("express");
const mongoose = require("mongoose");
const Signup = require("./Models/SignupSchema"); // make sure the folder name matches exactly
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connection Successful"))
.catch((err) => console.log("MongoDB Connection Unsuccessful", err));


// Routes
app.get("/", (req, res) => {
  res.send("Server started successfully");
});

app.get("/json", (req, res) => {
  res.json({
    College: "Sece",
    Dept: "CYS",
    StuCount: "64",
  });
});

// Serve static file
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await Signup.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", isSignup: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      email: email,
      username: username,
      password: hashedPassword,
    });

    await newSignup.save();
    res.status(200).json({ message: "Signup Successful", isSignup: true });
  } catch (error) {
    console.log("Signup Error:", error);
    res.status(500).json({ message: "Signup Failed", isSignup: false });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User not found. Signup first.", isLoggedIn: false });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      return res
        .status(401)
        .json({ message: "Incorrect password", isLoggedIn: false });
    }

    res.status(200).json({ message: "Login Successful", isLoggedIn: true });
  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Login Error", isLoggedIn: false });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8001;

app.use(express.json());
app.use(cors());

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

app.get("/static", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server Started Successfully on port ${PORT}`);
});
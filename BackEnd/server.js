const express = require("express");
const app = express();
const PORT = 5000;

// Middleware for JSON parsing
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from Node backend!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

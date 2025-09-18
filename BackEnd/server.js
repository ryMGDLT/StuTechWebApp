const express = require("express");
const os = require("os");
const app = express();
const PORT = 5000;

// Middleware JSON parsing
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from Node backend!");
});

// get local IP
function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address; 
      }
    }
  }
  return "localhost";
}

const localIP = getLocalIP();

// Start server 
app.listen(PORT, "0.0.0.0", () => {
  console.log("✅ Server running at:");
  console.log(`   Local:   http://localhost:${PORT}`);
  console.log(`   Network: http://${localIP}:${PORT}`);
});

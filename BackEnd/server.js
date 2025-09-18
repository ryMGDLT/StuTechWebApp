const express = require("express");
const os = require("os");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send("Hello from Node backend!");
});

// Detect IP
function getLocalIp() {
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Accessible on LAN: http://${getLocalIp()}:${PORT}`);
});

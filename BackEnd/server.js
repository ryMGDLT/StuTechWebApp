const os = require("os");
const { createApp } = require("./src/app");
const { env } = require("./src/lib/env");

const app = createApp();

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

if (require.main === module) {
  app.listen(env.PORT, () => {
    console.log(`Server running at http://localhost:${env.PORT}`);
    console.log(`Accessible on LAN: http://${getLocalIp()}:${env.PORT}`);
  });
}

module.exports = { app, createApp };

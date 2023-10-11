const http = require("node:http");
const { findAvailablePort } = require("./PortFinder.js");

console.log("Starting server...");

const desiredPort = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Hello world!");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  });
});

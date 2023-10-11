const http = require("node:http");
const fs = require("node:fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.write("<h1>Home</h1>");
  } else if (req.url === "/contacto") {
    res.write("<h1>Contacto</h1>");
  } else if (req.url === "/image") {
    fs.readFile("image.jpeg", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.write("<h1>Internal Server Error</h1>");
        return;
      }
      res.setHeader("Content-Type", "image/jpeg");
      res.write(data);
    });
  } else {
    res.statusCode = 404;
    res.write("<h1>404</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

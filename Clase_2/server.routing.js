const http = require("node:http");

const port = process.env.PORT || 3000;
const dittoJSON = require("./ditto.json");

const processRequest = (req, res) => {
  const { url, method } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify(dittoJSON));
          return res;
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end("<h1>404</h1>");
          return res;
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";

          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            // Aquí se debería guardar la información en la base de datos
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data));
          });

          break;
        }
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end("<h1>404</h1>");
          return res;
      }
  }
};

const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

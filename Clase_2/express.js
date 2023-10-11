const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const dittoJSON = require("./ditto.json");

app.disable("x-powered-by"); // Deshabilita el header X-Powered-By
app.use(express.json()); // Middleware para parsear el body a JSON

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hola Mundo</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  res.status(200).json(dittoJSON);
});

app.post("/pokemon", (req, res) => {
  res.status(201).send(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const path = require("path");

// Muestra como unir directorios para formar una ruta
const filePath = path.join("dir1", "dir2", "file.txt");
console.log(filePath);

// Muestra el nombre del archivo
console.log(path.basename(filePath));

// Muestra la extensión del archivo
console.log(path.extname(filePath));

// Muestra el nombre del archivo sin la extensión
console.log(path.basename(filePath, path.extname(filePath)));

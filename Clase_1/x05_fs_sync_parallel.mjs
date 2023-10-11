import { readFile } from "node:fs/promises";

Promise.all([readFile("archivo.txt"), readFile("archivo2.txt")])
  .then(([data1, data2]) => {
    console.log(data1.toString());
    console.log(data2.toString());
  })
  .catch((error) => {
    console.error(error);
  });

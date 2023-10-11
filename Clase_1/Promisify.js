/**
 * Promisify
 *
 * Promisify is a utility function that converts a function
 * that accepts a callback into a function that returns a promise.
 *
 * The promisify function is available in the util module.
 */

const { promisify } = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

readFileAsync("archivo.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

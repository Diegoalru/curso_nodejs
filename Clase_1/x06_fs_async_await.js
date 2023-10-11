const { readFile } = require('node:fs/promises');

// Funciones asíncronas
async function init() {
  try {
    console.log("Leyendo el primer archivo...");
    const text = await readFile("./archivo.txt", "utf-8");
    console.log("~ Primer archivo:", text);

    console.log("* Hacer cosas mientras lee el archivo...");

    console.log("Leyendo el segundo archivo...");
    const secondText = await readFile("./archivo2.txt", "utf-8");
    console.log("~ Segundo archivo:", secondText);
  } catch (error) {
    console.error(error);
  }
}

// Iniciar la función
init();

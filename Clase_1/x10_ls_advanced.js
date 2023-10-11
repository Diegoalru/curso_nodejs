const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

async function main(folder) {
  let files;

  try {
    // Lee el directorio
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.error(pc.red(`❌ No se pudo leer el archivo ${filePath}`));
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();

    return `${
      fileType == "f" ? pc.bgGreen(fileType) : pc.bgMagenta(fileType)
    } ${pc.blue(file.padEnd(20))} ${pc.green(
      fileSize.padStart(10)
    )} ${pc.yellow(fileModified)}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

// Obtiene el directorio a listar
const folder = process.argv[2] ?? ".";
main(folder);

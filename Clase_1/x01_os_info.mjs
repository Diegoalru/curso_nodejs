import os from 'node:os'

const freeMemory = os.freemem() / 1024 / 1024 / 1024;
const totalMemory = os.totalmem() / 1024 / 1024 / 1024;

console.log("Mostrando información del sistema operativo");
console.log(`Sistema operativo: ${os.type()}`);
console.log(`Versión: ${os.release()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`Memoria libre: ${freeMemory.toFixed(2)} GB`);
console.log(`Memoria total: ${totalMemory.toFixed(2)} GB`);
console.log(`Núcleos: ${os.cpus().length}`);
console.log(`Información de un núcleo: ${JSON.stringify(os.cpus()[0])}`);

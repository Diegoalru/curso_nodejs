const net = require("node:net");

/**
 * Encuentra un puerto disponible.
 * @param {number} desiredPort El puerto deseado.
 * @returns {Promise<number>} El puerto disponible.
 */
function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    // Crea un servidor TCP
    const server = net.createServer();

    // Intenta escuchar en el puerto deseado
    server.listen(desiredPort, () => {
      // Si no hay error, el puerto está disponible
      const { port } = server.address();
      // Cierra el servidor
      server.close(() => {
        resolve(port);
      });
    });

    // Si hay un error o el puerto está ocupado,
    // intenta con el siguiente.
    server.on("error", (error) => {
      if (error.code !== "EADDRINUSE") {
        reject(error);
        return;
      }
      // Si el puerto está ocupado, intenta con el siguiente
      findAvailablePort(desiredPort + 1)
        .then((port) => resolve(port))
        .catch((error) => reject(error));
    });
  });
}

module.exports = { findAvailablePort };

// Para poder obtener los argumentos de entrada
console.log(process.argv);

// Para poder obtener el directorio de trabajo actual
console.log(process.cwd());

// Obtener variables de entorno
console.log(process.env.HOME);

// Para poder terminar el proceso de ejecucion de un script
// usar process.exit( exitCode ) donde exitCode es un numero
// que indica el estado de salida del proceso (0 = OK, 1 = ERROR)
process.exit(1);

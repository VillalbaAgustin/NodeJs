//* Process es una Variable global


//* Argumento de entrada
// console.log(process.argv);


//* Podemos controlar la entrada y salida    pasamos 1 si salio todo bien, 2 para error
// process.exit(0)

//* Podemos controlar eventos del proceso

process.on('exit', () => {
  // Limpiar los recursos
});

//* Current working directory
// console.log(process.cwd())

//* Platform
// console.log(process.platform);

//* Variables de entorno
// console.log(process.env.PEPITO)

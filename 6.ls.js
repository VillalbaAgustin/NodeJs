const fs = require("node:fs");

// Siempre el error es el primer parametro

fs.readdir("./data", (err, files) => {   // Si pusieramos '.' en lugar de './data' lee todos los archivos de la ruta actual
  if (err) {
    console.error("Error al leer el directorio: ", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});


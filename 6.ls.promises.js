const fs = require('node:fs/promises');

// Si pusieramos '.' en lugar de './data' lee todos los archivos de la ruta actual
fs.readdir('.')
.then(files => {
  files.forEach(file => {
      console.log(file)
      })
    })
    .catch(err => {
      if (err) {
        console.error("Error al leer el directorio: ", err);
        return;
      }
    });




//Asíncrono secuencial. 
//Primero ejecuta una promesa, libera memoria, pero no continua con la siguiente promesa hasta no terminar la primera.

const { readFile } = require('node:fs/promises')

const init = async () => {

  console.log("Leyendo el primer archivo...");
  const text = await readFile("./data/first.txt", "utf-8")
  console.log("Primer texto:", text);
  
  
  console.log("Hacer cosas mientras lee el archivo"); // ----> Se ejecuta antes de leer el primer archivo
  console.log("Leyendo segundo archivo...");
  
  
  const text2 = await readFile("./data/second.txt", "utf-8")
  console.log('Segundo texto:', text2);
}


init();
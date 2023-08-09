//Asincrono en paralelo.
//Arranca las dos promesas juntas, libera memoria, al terminar ambas promesas devuelve el resultado de las dos

const { readFile } = require("node:fs/promises");

Promise.all([
  readFile("./data/first.txt", "utf-8"),
  readFile("./data/second.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("Primer texto:", text);
  console.log("Segundo texto:", text2);
});

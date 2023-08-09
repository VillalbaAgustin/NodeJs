const fs = require("node:fs");

// utf-8 es la codificación de nuestros caracteres

console.log("Leyendo el primer archivo...");
fs.readFile("./data/first.txt", "utf-8", (error, text) => {
  console.log("Primer texto:", text);
});

console.log("Hacer cosas mientras lee el archivo"); // ----> Se ejecuta antes de leer el primer archivo
console.log("Leyendo segundo archivo...");

fs.readFile("./data/second.txt", "utf-8", (error, text) => {
  console.log("Segundo texto:", text);
});
const fs = require("node:fs/promises");
const { text } = require("stream/consumers");

console.log("Leyendo el primer archivo...");
fs.readFile("./data/first.txt", "utf-8").then((text) => {
  console.log("Primer texto:", text);
});

console.log("Hacer cosas mientras lee el archivo"); // ----> Se ejecuta antes de leer el primer archivo
console.log("Leyendo segundo archivo...");

fs.readFile("./data/second.txt", "utf-8").then((text) => {
  console.log("Segundo texto:", text);
});

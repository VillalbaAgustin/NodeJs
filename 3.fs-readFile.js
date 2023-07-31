const fs = require('node:fs');

const text = fs.readFileSync('./data/first.txt');
const text2 = fs.readFileSync('./data/first.txt', 'utf-8');  // ya codificado 

console.log(text) // Devuelve el buffer de memoria 
console.log(text2) // Devuelve el contenido 
console.log(text.toString()) // Devuelve el contenido 
const fs = require('node:fs');

console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./data/first.txt');
const text2 = fs.readFileSync('./data/second.txt', 'utf-8');  // ya codificado 

console.log(text) // Devuelve el buffer de memoria 
console.log(text2) // Devuelve el contenido 
console.log(text.toString()) // Devuelve el contenido 


console.log('Leyendo segundo archivo...')
const text3 = fs.readFileSync('./data/third.txt','utf-8');
console.log(text3);
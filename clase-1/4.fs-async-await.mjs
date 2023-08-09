//Para usar el await fuera de una función tenemos q usar ES  (ECMASScript modules)  ===> extenison .mjs   importamos sin el require

import { readFile } from "node:fs/promises";  


console.log("Leyendo el primer archivo...");
const text = await readFile("./data/first.txt", "utf-8")
console.log("Primer texto:", text);


console.log("Hacer cosas mientras lee el archivo"); // ----> Se ejecuta antes de leer el primer archivo
console.log("Leyendo segundo archivo...");


const text2 = await readFile("./data/second.txt", "utf-8")
console.log('Segundo texto:', text2);



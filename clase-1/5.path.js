const path = require('node:path');

// console.log(path);

// Barras separadoras según sistema óperativo
console.log(path.sep);

// Unir rutas con path.join
const filePath = path.join(`${__dirname}` , 'prueba', 'soy_la_base.css');
console.log(filePath);


console.log(path.basename(filePath));

// Podemos ver la extención del archivo
const extension = path.extname(filePath);
console.log(extension);

// console.log(path.dirname(filePath));
// console.log(path.parse(filePath));
// console.log(path.resolve('hola'));


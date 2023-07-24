const path = require('path');

// console.log(path);
// console.log(path.sep);
const filePath = path.join(`${__dirname}` , 'prueba');

// console.log(filePath);
// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
console.log(path.parse(filePath));
// console.log(path.extname(filePath));


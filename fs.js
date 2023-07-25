const path = require('path')
const fs = require('fs');

// console.log(fs);
// console.log(fs.readFileSync(path.join('./data', 'first.txt')))

// const first = fs.readFileSync('./data/first.txt', 'utf-8');
// const second = fs.readFileSync('./data/second.txt');


// console.log(first);
// console.log(second.toString());

// fs.writeFileSync('./data/third.txt','Hello world 3');

// fs.writeFileSync('./data/fourth.txt','Hello world 44444',{
//   flag: 'a'
// });    //* Añade texto a un doc ya creado en lugar de pisarlo 

fs.readFile('./data/second.txt', (error , data)=>{
  
  if (error) {
    console.log(error)
  }

  console.log(data.toString());
  console.log('Termino')
})
const http = require("node:http");
const { findAvailablePort } = require("./10.free-port");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("Acerca de...");
    return response.end();
  }

  response.write(`
  <h1>Not found</h1>
  <p>La pagina a la que hace referencia no esta disponible <p/>
  <a href="/"> Volver pag de inicio</a>
  `);
  response.end();
});

// server.listen(3000, () => {
//   console.log("Servidor escuchando puerto 3000");

// });

//? Si el puerto esta ocupado podemos usar la siguiente alternativa, donde encontramos y usamos un puerto libre

// server.listen(0,() =>{
//   console.log(`Servidor escuchando pueto: ${server.address().port}`)
// })

//? Usando findAvailablePort creada en 10.free-port.js q creeamos 

findAvailablePort(3000).then(port =>{
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
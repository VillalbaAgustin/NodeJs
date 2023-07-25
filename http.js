const http = require("http");

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

server.listen(3000);

console.log("Servidor escuchando puerto 3000");

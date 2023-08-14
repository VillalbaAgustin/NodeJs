const http = require("node:http");
const { findAvailablePort } = require("../clase-1/10.free-port");
const dittoJson = require("./pokemon/dittto.json");

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJson));

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }
    case "POST":
      switch (url) {
        case "/pokemon":
        
      }
      default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.end("Not found");
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log("Sever listening on port http://localhost:3000");
});

// findAvailablePort(3000).then((port) => {
//   server.listen(port, () => {
//     console.log(`Server lintening http://localhost:${port}`);
//   });
// });

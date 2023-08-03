const { readFile } = require("node:fs/promises");
const { text } = require("stream/consumers");

Promise.all([
  readFile("./data/first.txt", "utf-8"),
  readFile("./data/second.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("Primer texto:", text);
  console.log("Segundo texto:", text2);
});

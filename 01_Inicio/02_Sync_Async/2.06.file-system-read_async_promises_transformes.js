/*

Esto dará error ya que el "node:util" se usa únicamente en los módulos nativos que NO TIENEN PROMESAS, a fin de transformarla a una promesa.

*/

// ASINCRONO PROMISE

const fs = require("node:fs/promises");
const { promisify } = require("node:util");

const readFilePromise = promisify(fs.readFile);

console.log("--->Leyendo el primer archivo...");
console.log("");

readFilePromise("./archivo.txt", "utf-8")
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.log("SE PRODUJO UN ERROR");
  });

console.log("");
console.log("--->Haciendo algo mientras lee primer archivo...");
console.log("");

console.log("--->Leyendo el segundo archivo archivo...");
console.log("");

readFilePromise("./archivo2.txt", "utf-8")
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.log("SE PRODUJO UN ERROR");
  });

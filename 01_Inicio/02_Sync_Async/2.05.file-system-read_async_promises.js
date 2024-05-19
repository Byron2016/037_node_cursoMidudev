/*

Puede jugar con el tamaño del primer archivo y verificar que devolverá antes o después dependiendo del mismo.

*/

// ASINCRONO PROMISE

const fs = require("node:fs/promises");

console.log("--->Leyendo el primer archivo...");
console.log("");

fs.readFile("./archivo.txt", "utf-8")
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

fs.readFile("./archivo2.txt", "utf-8")
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.log("SE PRODUJO UN ERROR");
  });

/*

Puede jugar con el tamaño del primer archivo y verificar que devolverá antes o después dependiendo del mismo.

*/
// ASINCRONO CALLBACK

const fs = require("node:fs");

console.log("--->Leyendo el primer archivo...");
console.log("");

fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  if (err) {
    console.error("Error al leer el archivo ", err);
    return;
  }
  console.log(text);
});

console.log("");
console.log("--->Haciendo algo mientras lee primer archivo...");
console.log("");

console.log("--->Leyendo el segundo archivo archivo...");
console.log("");

fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  if (err) {
    console.error("Error al leer el archivo ", err);
    return;
  }
  console.log(text);
});

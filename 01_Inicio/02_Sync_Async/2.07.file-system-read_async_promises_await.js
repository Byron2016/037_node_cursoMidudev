/*

En commonJS no se puede utilizar directamente, por eso se debe usar función autoinvocada.
OJO en ESModule si funcionaría ver 2.08

const fs = require("node:fs/promises");

console.log("--->Leyendo el primer archivo...");
console.log("");

const text = await fs.readFile("./archivo.txt", "utf-8");
console.log(text);

console.log("");
console.log("--->Haciendo algo mientras lee primer archivo...");
console.log("");

console.log("--->Leyendo el segundo archivo archivo...");
console.log("");

const text2 = await fs.readFile("./archivo2.txt", "utf-8");
console.log(text2);

*/

const fs = require("node:fs/promises");

// IIFE - Inmediatly Invoked Function Expression
(async () => {
  console.log("--->Leyendo el primer archivo...");
  console.log("");

  const text = await fs.readFile("./archivo.txt", "utf-8");
  console.log(text);

  console.log("");
  console.log("--->Haciendo algo mientras lee primer   archivo...");
  console.log("");

  console.log("--->Leyendo el segundo archivo archivo...");
  console.log("");

  const text2 = await fs.readFile("./archivo2.txt", "utf-8");
  console.log(text2);
})();

/*
  Es equivalente a 
  async function init(){.....}
  init();
*/

// SINCRONO
const fs = require("node:fs");

console.log("--->Leyendo el primer archivo...");
console.log("");

const text = fs.readFileSync("./archivo.txt", "utf-8");

console.log(text);

console.log("");
console.log("--->Haciendo algo mientras lee primer archivo...");
console.log("");

console.log("--->Leyendo el segundo archivo archivo...");
console.log("");

const text2 = fs.readFileSync("./archivo2.txt", "utf-8");
console.log(text2);

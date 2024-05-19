import { readFile } from "node:fs/promises";

console.log("--->Leyendo el primer archivo...");
console.log("");

const text = await readFile("./archivo.txt", "utf-8");
console.log(text);

console.log("");
console.log("--->Haciendo algo mientras lee primer archivo...");
console.log("");

console.log("--->Leyendo el segundo archivo archivo...");
console.log("");

const text2 = await readFile("./archivo2.txt", "utf-8");
console.log(text2);

const { readFile } = require("node:fs/promises");

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
])
  .then(([text, text2]) => {
    console.log(text);
    console.log(text2);
  })
  .catch(([error, error2]) => {
    console.log("ERROR");
  });

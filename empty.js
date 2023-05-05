const { readFile } = require("./readFile.js");

const empty = (readFile) => {
  const indexes = [];
  readFile.forEach((subArr, i) => {
    subArr.forEach((str, j) => {
      if (str.includes("-")) {
        indexes.push([i, j]);
      }
    });
  });
  return indexes;
};
console.log(empty(readFile()));

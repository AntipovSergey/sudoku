const { readFile } = require("./readFile.js");

const empty = (readFile) => {
  for (let r = 0; r < readFile.length; r++) {
    for (let c = 0; c < readFile.length; c++) {
      if (readFile[r][c] === "-") {
        return [r, c];
      }
    }
  }
  return null;
};
console.log(empty(readFile()));

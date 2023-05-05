const fs = require("fs");

const readFile = () => {
  const readFileText = fs
    .readFileSync("puzzles.txt", "utf8")
    .match(/.{1,9}/g)
    .slice(0, 9)
    .map((el) => el.split(", "));

  return readFileText;
};
console.log(readFile());
module.exports = { readFile };

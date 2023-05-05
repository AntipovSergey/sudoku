const fs = require("fs");

const readFile = () => {
  const readFileText = fs
    .readFileSync("puzzles.txt", "utf8")
    .split("\r\n")
    .slice(0, 5)
    .join("")
    .match(/.{1,9}/g)
    .map((el) => el.split(""));

  return readFileText;
};
console.log(readFile());
module.exports = readFile;

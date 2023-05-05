const fs = require("fs");

const readFile = () => {
  const readFileText = fs
    .readFileSync("puzzles.txt", "utf8")
    .split("\r\n")
    .slice(0, 1)
    .join("")
    .match(/.{1,9}/g)
    .map((el) => el.split(""));

  return readFileText;
};

module.exports = { readFile };

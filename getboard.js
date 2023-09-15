const fs = require("fs");

const data = fs
  .readFileSync("./puzzles.txt", "utf-8")
  .trim()
  .split("\n")
  .map((row) => row.split(""))
  .map((el) => el.map((elem) => (elem === "-" ? 0 : Number(elem))));

const arr = [];
for (let i = 0; i < 9; i++) {
  arr.push(data[0].splice(0, 9));
}

//console.table(arr);

function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
      if(arr[i][i] === 0)

  }
}
module.exports = {
  arr,
};

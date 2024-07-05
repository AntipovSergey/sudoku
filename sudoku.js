const fs = require("fs");

function getSudocu() {
  let strs = fs.readFileSync("./puzzles.txt", "utf8").split("\r\n");
  let arr = strs[0].split("");
  let strArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i = i) {
    strArr.push(arr[i]);
    if (i % 9 === 0) {
      result.push(strArr);
      strArr = [];
    }
  }
  console.log(result);
}
getSudocu();

function isCheck(result) {
  let index;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[i][j] === "-") {
        index = [i, j];
        return index;
      }
    }
  }
}

function checkLine(sudocu, i) {
  let result = [];
  for (let l = 0; l < 9; l++) {
    if (sudocu[i][l] !== "-") {
      result.push(sudocu[l][i]);
    }
  }
  return result;
}

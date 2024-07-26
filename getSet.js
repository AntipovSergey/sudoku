const getLine = require ('./getLine.js')
const getColumn = require ('./getColumn.js')
const getArrBox = require ('./getArrBox.js')
const read = require("./read.js");

const arr = read();
console.log(arr);
const getSet = (...arr) => {
  const result = [];
  const arrays = [arr]
  console.log(arrays)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Number.isNaN(+arr[i][j])) {
        result.push(0);
      }
      result.push(+arr[i][j]);
    }
  }
  console.log(result);
  return [...new Set(result)].filter((item) => item !== 0);
};
const line = getLine(arr[0])
console.log(line);
const column = getColumn(arr[0])
const box = getArrBox(arr[0])
console.log(getSet(line, column, box))
module.exports = getSet;
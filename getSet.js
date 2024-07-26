const getLine = require("./getLine.js");
const getColumn = require("./getColumn.js");
const getArrBox = require("./getArrBox.js");
const read = require("./read.js");
const arr = read()

const line = getLine(arr[0], 0);
  const column = getColumn(arr[0], 0);
  const box = getArrBox(arr[0], 0);

const getSet = (...arr) => {
  const result = [];
  const arrays = arr;
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      result.push(+arrays[i][j]);
    }
  }
  return [...new Set(result)];
};
console.log(getSet(line, column, box))
module.exports = getSet;

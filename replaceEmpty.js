const getLine = require("./getLine.js");
const getColumn = require("./getColumn.js");
const getArrBox = require("./getArrBox.js");
const getSet = require("./getSet.js");

const replaceEmpty = (arr, index) => {
  const line = getLine(arr, index);
  const column = getColumn(arr, index);
  const box = getArrBox(arr, index);
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const set = getSet(line, column, box);
  console.log(set)
//   const uniques = nums.union(set);
//   console.log(uniques);
};

module.exports = replaceEmpty;

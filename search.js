const { getboard } = require("./getboard.js");

function search() {
  const arr = getboard();
  let num = 0;
  let emptySpaces = [];
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      if (arr[x][y] === 0) {
        emptySpaces.push([x, y]);
      }
    }
  }
  console.log(emptySpaces);
  return emptySpaces;
}

module.exports = { search };

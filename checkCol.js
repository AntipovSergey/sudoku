// const strToArr = require('./strToArr');
// const TEST = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
// console.table(strToArr(TEST));

function checkCol(arr, indexes, num) {
  console.log('indexes', indexes);
  const colIndex = indexes[1];
  const col = [];
  for (let i = 0; i < arr.length; i += 1) {
    col.push(arr[i][colIndex]);
  }
  return !col.includes(num.toString());
}
// console.log(checkCol(strToArr(TEST), [0, 1], 6));
module.exports = checkCol;

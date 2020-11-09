// let puzzle = sudokuParse(data);
let puzzleStr = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function maria (puzzleStr) {
  let array = [];
  for (let i = 0; i < 9; i++) {
    array[i] = puzzleStr.slice(i*9, i*9 + 9);
    array[i] = array[i].split('');
    for (let j = 0; j < 9; j++) {
      if (array[i][j] == '-') {
        array[i][j] = '';
      }
      if ((array[i][j] !== '')) {
        array[i][j] = +array[i][j];
      }
    }
  };


  
  return array;
}
console.log(maria(puzzleStr));

// [
//   [1, 2, '', '', 5, 4, '', 8, 9]
//   [1, 2, '', '', 5, 4, '', 8, 9]
//   [1, 2, '', '', 5, 4, '', 8, 9]
//   [1, 2, '', '', 5, 4, '', 8, 9]
//   [1, 2, '', '', 5, 4, '', 8, 9]
//   [1, 2, '', '', 5, 4, '', 8, 9]
//   [1, 2, '', '', 5, 4, '', 8, 9]
//   [1, 2, '', '', 5, 4, '', 8, 9]
//   [1, 2, '', '', 5, 4, '', 8, 9]
  
// ]
module.exports = {maria}

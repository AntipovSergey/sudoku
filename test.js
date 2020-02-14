let sudoku = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function createBoard(sudoku) {
    let dash = new RegExp('-', 'g');
    sudoku = sudoku.replace(dash, 0);
    let board0 = Array.from(sudoku).map(function (i) {
        return parseInt(i, 10)
    });
    let chunked_arr = [];
    let index = 0;
    while (index < board0.length) {
        chunked_arr.push(board0.slice(index, 9 + index));
        index += 9;
    }
    return chunked_arr;
}
// console.log(createBoard(sudoku));

let board= createBoard(sudoku);
let row= 0;
let col= 7;

function checkRow (value) {
  if (board[row].includes(value)) {
    return false;
  }
  return true;
}

function checkCol(value) {
  if (board[col].includes(value)) {
    return false;
  }
  return true;
}

console.log(checkCol(7));

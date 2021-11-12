const fs = require('fs');
const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

// console.log(sudokuPuzzles);

function generateBoard(sudokuPuzzles) {

  let puzzle = sudokuPuzzles.slice(0, 81);
  puzzle = puzzle.replace(/-/gm, '0');
  // console.log(puzzle);
  let board = [];
   for (let i = 0; i < puzzle.length; i += 9) {
   board.push(puzzle.slice(i, i + 9).split(''));
}
return board;
}
console.table(generateBoard(sudokuPuzzles));

function findEmptySpace(generateBoard) {
  let board = generateBoard(sudokuPuzzles);
  // console.log(board);
  let arrEmpty = [];
  for (let i = 0; i < board.length; i += 1) {
    // console.log(board[i].length)
    for (let j = 0; j < board[i].length; j += 1) {
      // console.log(board[i][j]);
      if (board[i][j] === '0') {
        arrEmpty.push([i,j])
      }
    }
  }
  
  return arrEmpty;
}
console.log(findEmptySpace(generateBoard));


// function filterNumbers(arr1, arr2) {
//   return arr1.filter(item => !arr2.includes(item));
// }


function chekNumber(generateBoard, findEmptySpace) {
  let someNum = ['1','2','3','4','5','6','7','8','9'];
  let linear = [];
  let vertical = [];
  let empty = findEmptySpace(generateBoard);

  let board = generateBoard(sudokuPuzzles);

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {

    }
  } 

  // console.log(empty);
  
  
  for (let i = 0; i < board.length; i += 1) {
    linear.push(someNum.filter((el,j) => !board[i].includes(el)))
    // !board[i][j].includes(+el))
    // board[i].filter(el => console.log(someNum.includes(+el)))
     
  }
  
  console.log(linear);
  return linear;
}
 chekNumber(generateBoard, findEmptySpace);


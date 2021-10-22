// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {}

const findEmpty = (board) => {
  // find '.'
  const size = 9;
  // size of the whole table
  const boxSize = 3;
  // size of the box

  // Найти пустую клетку
  // На входе полная таблица
  // Итерируемся через строки
  for (let row = 0; row < size; row++) {
    //  Итерируемся по строке выбирая c  значения
    for (let column = 0; column < size; column++) {
      // Если элемент в строке r и на её позиции column
      // === '.'
      if (board[row][column] === ".") {
        return [row, column];
      }
    }
  }
  return "ready";
};


function squareCheck(arr, pos, target) {
  let tests = {0:/[0-2]/, 3:/[3-5]/, 6:/[6-8]/}
  const [row,column] = pos;
  let startRow;
  let startColumn;
  let element;
  
  // Приведение к нормальной точке отсчёта)
  for (i in tests){
    regex = tests[i]
    if(regex.test(row)){
      startRow = i
    }
    if(regex.test(column)){
      startColumn = i
    } 
  }
  console.log(startRow, startColumn);
  
  for (let i = startRow; i < startRow + 3; i++){
    for (let j = startColumn; j < startColumn + 3; j++){
      element = arr[i][j]
      if (element !== '.'){
        if(Number(element) === target){
          return false
        } 
        
      }
    }
  }
  // Совпадение
  // На входе полная таблица
  
  return true;
}

let board = [
  ["5", "3", "5", "3", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(
  squareCheck(board, [1,1],3)
);

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

function crossCheck(array, position) {
  // column право-лево
  let [row, column] = position;
  let number = array[row][column];

  for (let i = 0; i < array.length; i++) {
    let row = position[0];
    let column = position[1];
    
    
    for (let i = 0; i < array.length; i++) {
      for (let g = 0; g < array.length; g++) {
        if (+array[row][g] === num) {
          return false;
        } else if (+array[i][column] === num) {
          return false
        }
      }
    }
      return true;
  }
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
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
      if (board[row][column] === "-") {
        return [row, column];
      }
    }
  }
  return "false";
};





let sudokuTest = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function solve(boardString) {
  let board = prettyBoard(boardString)
// Подаём НАШЕ число 
for (let i = 1; i <= 9; i++) {
  let num = i

}
  let coordinates = findEmpty(board)
console.log(coordinates)







 return board 
}
console.table(solve(sudokuTest)); 



  



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
      if (element !== '-'){
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
// console.log(
//   squareCheck(board, [1,1],3)
// );

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
let x = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function prettyBoard(board) {
  let reg = /.{9}/g
  let arr = board.match(reg)
  // список строк
  let newArr = arr.map((board) => board.split(''))
  return newArr
}

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
// console.log(prettyBoard(x));
// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}


//
// function nextEmptySpot(board) {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] === '-')
//         return [i, j]

//     }
//   }
//   return [-1, -1]
// }

// function checkRow(board, row, value){
//   for (let i = 0; i < board; i++) {
    
    
//   }
// }
//   prettyBoard: prettyBoard,
// };

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
//преобразует строку в массив 
let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function solve(boardString) {
  let arr = []
  for(let i = 0; i < boardString.length; i +=9) {
    arr.push(boardString.slice(i, i+9).split(''))
  }
  return arr
  console.log('first changes');
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.


const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

/* !!!! пишем функцию которая позволяет находить ПЕРВЫЙ свободный элемент в нашей матрице
   и будет возвращать эту позицию */
const cellCheck = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '-') {
        return [i, j];
      }
    }
  }
};
// console.log(cellCheck(board))
// заполняем пустые клетки
const cellFill = (board) => {
  const position = cellCheck(board);
  // получаем массив из двух значений [г,в]
  const [g, v] = position;
  for (let i = 1; i <= 9; i++) {
    if(board[g].indexOf(i) === -1)
    position = i
  }
  console.log(position);
};
console.log(cellFill(board));


//проверяет решилась или нет 
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
//приводит к виду доски 
function prettyBoard(board) {
  let el = board.join('\n').replaceAll(',','')
  console.table(el);
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

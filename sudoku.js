// const {sudokuParse, data} = require('./runner.js');



// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let arrMain = [];
let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve(boardString) {
  console.log(boardString);
  let arrBoard = boardString.split('');
  
  for (i = 0; i < 9 ; i++) {
    let arr = [];
    for (j = 0; j < 9; j++) {
      arr.push(arrBoard[j]);
    }
    arrMain.push(arr);
    arrBoard.splice(0, 9);

  }
  return arrMain;
}

// console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


function prettyBoard(board) {
  return (board.map(el => el.join('')).join('\n') )
}

module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}




//==============
//Поиск массива чисел из строки по координате
function searchString(rowIndex) {
  let str = arrMain[rowIndex].join('');
  return str.match(/\d/g);
}

// console.log((searchString(rowIndex)));

//Поиск массива чисел из колонки по координате
function searchColumn(columnIndex, arrMain) {
  let arrColumn = [];

  for (let i = 0; i < 9; i++  ) {
    if (arrMain[i][rowColumn] !== '-') {
      arrColumn.push(arr[i][rowColumn]);
    }
  }
  return arrColumn;

}

// console.log((searchColumn(columnIndex, arrMain)));

//координата заполняемой ячейки
let rowIndex;
let columnIndex;

function xy() {
  for (let i = 0; i < arrMain.length; i++) {
    for (let j = 0; arrMain[i].length; j++) {
      if (arrMain[i][j] == '-') {
        rowIndex = i;
        columnIndex = j;
        return;
      }
      continue;
    }
  }
}

xy();


//исключение "лишних" цифр из массива для подстановки
function digitsToPaste () {
  let arrDigits = ['1','2','3','4','5','6','7','8','9'];
  
}


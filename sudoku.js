const fs = require('fs')
const RAW_SUDOKU_FILE= fs.readFileSync('./sudoku-puzzles.txt', 'utf-8')


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {}

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
function prettyBoard(file) {
	const LINE_BREAKER_REGEXP = /\n/gm
	let board = file.slice().replace(LINE_BREAKER_REGEXP, '');

  let boardsContainer = {};
  let inputString = board.split('');
  const ROW_LENGTH = 9;
  let sudokuNumberInContainer = 0;
  while (inputString.length !== 0) {
    const sudokuArray = [];
    for (let index = 0; index < ROW_LENGTH; index += 1) {
      const stringSlice = inputString.slice(0, ROW_LENGTH);
      sudokuArray.push(stringSlice);
      inputString = inputString.slice(ROW_LENGTH, -1);
    }
		boardsContainer[sudokuNumberInContainer] = sudokuArray
		sudokuNumberInContainer += 1;
  }
	return boardsContainer;
}
//Поиск числа в горизонтальной строке
function searchWordHorizontal (cellCoordinates,arr) {
  let ArrElemToString = arr.map(el => el.join(''))
  for (let i = 0; i < ArrElemToString.length; i++) {
    if(ArrElemToString[i].includes(cellCoordinates + '')) {
      return true;
    }
    
  }
  return false;
}
//Получаем массив чисел которые уже есть в строке
function getRectrictedHorizontal (arr) {
  let ArrElemToString = arr.map(el => el.join(''))
  let rectrictNumbersHorizontal = []
  for (let i = 0; i < ArrElemToString.length; i++) {
    if(ArrElemToString[i] !== '-')
    rectrictNumbersHorizontal.push(ArrElemToString[i] )    
  }
  return rectrictNumbersHorizontal;
  
}
//Получаем массив чисел которые уже есть в столбце
function getRectrictedVertical (arr) {
  for (let i = 0; i < arr.length; i++) {
    let rectrictNumbersVertical = [];
    for (let j = 0; j < arr.length; j++) {
      if(arr[j][i] !== '-') {
       rectrictNumbersVertical.push(arr[j][i])     
      }
    }
    return rectrictNumbersVertical
  }
  
}

// Поиск числа в вертикальной строке
function searchWordVertical (cellCoordinates,arr) {
  for (let i = 0; i < arr.length; i++) {
    let verticalWord = '';
    for (let j = 0; j < arr.length; j++) {
      verticalWord += arr[j][i]      
    }
    if(verticalWord.includes(cellCoordinates + '')) {
      return true
    }
  }
  return false
}

console.log(prettyBoard(RAW_SUDOKU_FILE))

let coordinate = [a,b]

function checkForValidCell (arr) {
  let blocks = []
  for (let i = 0; i < 8; i += 2) {
    for (let j = 0; j < 8; j += 2) {
      blocks.push([])
      /*
      Если на текущую ячейку один кандидат то мы туда вписываем число и все
      Если на ячейку несколько кандидатов то мы запускаем еще раз функцию и делаем это до тех пор пока не найдем ячейку с одним кандидатом
      */
    }
    
  }
}

function getElements ()



// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}


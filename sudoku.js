const fs = require('fs');
const sudokuParse = require('./runner');
const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

const board = sudokuParse(content, 1);

const empty = require('./empty');
let arrNew = empty(board);

const checkGV = require('./test');
// const numb = checkGV(board, arrNew[0], arrNew[1], );

const checkSector = require('./checkSector');
// const checkS = checkSector(board, numb, arrNew);

function numbers(boardQ, x, y) {
  if (empty(boardQ) === null) {
    return boardQ;
  }
  if (empty(boardQ)) {
    for (let i = 1; i <= 9; i++) {
      if (checkGV(boardQ, x, y, i) && checkSector(boardQ, i, arrNew)) {
        boardQ[arrNew[0]][arrNew[1]] = i;
      }
      // console.log(board);
    }
    for (let i = 1; i <= 9; i++) {
      console.table(boardQ);
    }
  }
  return numbers(boardQ, arrNew[0], arrNew[1]);
}
console.table(numbers(board, arrNew[0], arrNew[1]));





/*
function run(boardRun) {
  if (empty(boardRun) === null) {
    return boardRun;
  }
  numbers(boardRun, arrNew[0], arrNew[1], checkGV);

}
console.table(run(board));*/


// Принимает доску как строку в формате
// вы видите в файле головоломки. Возврат
// что-то, представляющее доску после
// ваш решатель попытался решить эту проблему.
// Как вы представляете свою доску, зависит от вас!
function solve(bool) {
  
}


// Возвращает логическое значение, указывающее,
// или нет решена предоставленная плата.
// Плата ввода будет в любом
// форма возвращает «решение».
function isSolved(bor) {

}

// Принимает доску в той или иной форме и
// возвращает хорошо отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// форма возвращает «решение».
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

const sudokuParse = require('./runner');
const fs = require('fs');
const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

const board = sudokuParse(content, 1);


// Принимает доску как строку в формате
// вы видите в файле головоломки. Возврат
// что-то, представляющее доску после
// ваш решатель попытался решить эту проблему.
// Как вы представляете свою доску, зависит от вас!
function solve(boardString) {

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

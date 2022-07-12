const switcher = require('./forSolve.js');
const solved = require('./slav.js');
const boardString = require('./createTable');
const prettySudoku = require('./prettyBoard')

/* const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question("What is your name? ", function (answer) {
console.log(`Oh, so your name is ${answer}`);
rl.close();
}); */


/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */


let newString = boardString();

function solve(newString, stepsNum = 0) {

    if (stepsNum > 80) {
        return newString;
    }
    stepsNum = stepsNum + 1

    let result = switcher.switcher(newString)
    if (solved(result) == false) {
        return solve(result, stepsNum)
    }

    return newString;

}

// console.log(solve(newString))

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
    let str = solved(board);
    if (str === true) {
        return "You win! \nFlawless victory.";
    }
    return "        You lose!"
}
let finalBoard = solve(newString)
console.log(prettyBoard(finalBoard))
console.log(isSolved(finalBoard));


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
   return prettySudoku(board);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
    solve,
    isSolved,
    prettyBoard,
};

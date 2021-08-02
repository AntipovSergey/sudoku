// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Принимает строку => возвращает решенную строку

let input = [
    ["4", "3", "1", "."],
    [".", "2", ".", "."],
    [".", ".", "3", "."],
    [".", ".", "2", "."],
];

function solve(boardString) {}

function getPossibleValues(arr) {
    let allPossibleNums = [1, 2, 3, 4];
    // return [] возможных значений
}

function findEmpty(board) {
    let emptyCell = '.';
    for (let r = 0; r < board.length; i++) {
        for (let c = 0; c < board.length; c++) {
            if (board[r][c] === emptyCell) {
                return [r, c];
            }
        }
        return null;
    }
}

console.log(findEmpty(input));

function searchHorisontal(arr) {
    //return [] найденных значений
}

function searchVertical(arr) {
    //return [] найденных значений
}

function searchInCell(arr) {
    //return [] найденных значений
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// Принимает строку, ищет прочерки => если прочерки есть - false, нет - true
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// форматирует строку в 9 строк по 9 символов
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
    solve: solve,
    isSolved: isSolved,
    prettyBoard: prettyBoard,
};

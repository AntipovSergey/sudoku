// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function arrayBoardFromStringBoard(boardString) {
    const arrOfStr = boardString.match(/.{9}/g)
    const result = [];
    for (let i = 0; i < arrOfStr.length; i++) {
        result.push(arrOfStr[i].split(''))
    }
    return result
}

function solvingSudoku(string) {
    // making array board 
    const board = arrayBoardFromStringBoard(string);
    // making array of indexes of empty string in format[indexOfArray, indexOfElement]
    function findAllEmptyCells(board) {
        const arrayOfIndexesOfEmptyStrings = [];
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '-') {
                    // const indexOfArray = i;
                    // const indexOfElement = j;
                    arrayOfIndexesOfEmptyStrings.push([i, j]);
                }
            }
        }
        return arrayOfIndexesOfEmptyStrings
    };
    // go through emptycell ine by one
    const arrOfIndexforemptyString = findAllEmptyCells(board)
    for (let i = 0; i < arrOfIndexforemptyString.length; i++) {
        const indexOfArray = arrOfIndexforemptyString[0];
        const indexOfElement = arrOfIndexforemptyString[1];
        // call fucntion finding posible numbers x-asic


        nonExistingNumbersX(indexOfArray, board);
        // if array lengthcall function finding possible numbers y-asic
        //
    }
}


function nonExistingNumbersX(indexofArr, board) {
    let possibleCombinations = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let possibleNumbers = [];
    for (let i = 0; i < possibleCombinations.length; i++) {
        if (!board[indexofArr].includes(possibleCombinations[i])) {
            possibleNumbers.push(possibleCombinations[i]);
        }
    }
    return possibleNumbers;
}


// 


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
    solve: solve,
    isSolved: isSolved,
    prettyBoard: prettyBoard
}
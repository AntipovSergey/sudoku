// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
    let boardArray = stringToArray(boardString);
    let re = /[0-9]/;
    for (let i = 0; i < boardArray.length; i++) {
        for (let j = 0; j < boardArray[i].length; j++) {
            if (!re.test(boardArray[i][j])) {
                let test = fullPossibleAnswers(boardArray, j, i)
            }
        }
    }
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.



// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// module.exports = {
//     solve: solve,
//     isSolved: isSolved,
//     prettyBoard: prettyBoard
// }

function stringToArray(boardString) {
    let boardArray = [];
    for (let i = 9; i <= 81; i += 9) {
        boardArray.push(boardString.slice(i - 9, i));
    }
    return boardArray;
}

function revert(usedObject) {
    let unusedDigits = '123456789';
    let len = unusedDigits.length;
    for (let key in usedObject) {
        for (let i = 0; i < len; i++) {
            if (key == unusedDigits[i]) {
                unusedDigits = unusedDigits.slice(0, i) + unusedDigits.slice(i + 1)
            }
        }
    }
    return unusedDigits;
}
// console.log(revert({ '1': 1, '2': 1 }))

function possibleAnswers(unused1, unused2) {
    let possibleAnswers = ''
    for (let i = 0; i < unused1.length; i++) {
        for (let j = 0; j < unused2.length; j++)
            if (unused1[i] === unused2[j]) {
                possibleAnswers += unused2[j];
            }
    }
    return possibleAnswers;
}

function fullPossibleAnswers(boardArray, x, y) {
    let numbersSquare = revert(checkSquare(makeSquare(boardArray, x, y)));
    let numbersX = revert(checkColumn(x, boardArray));
    let numbersY = revert(checkLine(y, boardArray));
    let possibleAnswers = possibleAnswers(numbersY, possibleAnswers(numbersSquare, numbersX))
    return possibleAnswers;
}
// console.log(possibleAnswers('234', '345'))

function checkColumn(ColumnNumber, InputArray) {
    let result = {};
    let baseDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < baseDigits.length; i++) {
        for (let j = 0; j < InputArray.length; j++) {
            if (baseDigits[i] == InputArray[j][ColumnNumber]) {
                if (isNaN(result[baseDigits[i]])) {
                    result[baseDigits[i]] = 1;
                }
                else {
                    result[baseDigits[i]] = result[baseDigits[i]] + 1;
                }
            }
        }
    }
    return result;
}

function checkSquare(boardSmallArray) {
    let re = /[0-9]/;
    let used = {};
    for (let i of boardSmallArray) {
        if (re.test(i)) {
            used[i] = 1
        }
    }
    return used;
}

function makeSquare(boardArray, numberColumn, numberRow) {
    let startX = Math.floor(numberColumn / 3) * 3;
    let startY = Math.floor(numberRow / 3) * 3;
    let returnString = []
    for (let i = 0; i < 3; i++) {
        startX = Math.floor(numberColumn / 3) * 3;
        for (let j = 0; j < 3; j++) {
            returnString += (boardArray[startY][startX]);
            startX++;
        }
        startY++;
    }
    return returnString
}

function checkLine(NumberOfString, InputArray) {
    let baseDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = {};
    for (i = 0; i < baseDigits.length; i++) {
        for (let j = 0; j < InputArray[NumberOfString].length; j++) {
            if (baseDigits[i] == InputArray[NumberOfString][j]) {
                if (isNaN(result[baseDigits[i]])) {
                    result[baseDigits[i]] = 1;
                }
                else {
                    result[baseDigits[i]] = result[baseDigits[i]] + 1;
                }
            }
        }
    }
    return result
}

function testPassed(solvedArray) {
    for (let key in solvedArray) {
        if (solvedArray[key] > 1) {
            return false
        }
    }
    return true
}

function isSolved(argSolvedBoard) {
    for (i = 0; i < argSolvedBoard.length; i++) {
        for (j = 0; j < argSolvedBoard.length; j++) {
            if (testPassed(checkLine(j, argSolvedBoard))) {
                if (testPassed(checkColumn(i, argSolvedBoard))) {
                    if (testPassed(checkSquare(makeSquare(argSolvedBoard, i, j)))) {


                    }
                }
                else return false;
            }
            else return false;
        }
    }
    return true;
}

// niceArray = ["145892673", "893176425", "276435819", "519247386", "762583194", "384961752", "957614238", "438729561", "621358947"];
niceArray = ["145892673", "893176425", "276435819", "519247386", "76258194", "384961752", "957614238", "438729561", "621358947"];
console.log(niceArray);

console.log(isSolved(niceArray));


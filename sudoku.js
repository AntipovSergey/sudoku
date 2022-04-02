
const rules = require('./isSolved')

const { strToArr } = require('./strToArr')


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Берет доску в виде строки в формате, который вы видите в файле головоломки. Возвращает что-то, представляющее доску после того, как ваш решатель попытался ее решить. То, как вы представляете свою доску, зависит от вас!

// Разбиение строки на массив
function solve(boardString) {

  function solution(arr) {
    function checkEmpty(arr) {
      for (let m = 0; m < arr.length; m += 1) {
        for (let n = 0; n < arr[m].length; n += 1) {
          if (arr[m][n] === '-') {
            return true;
          }
        }
      }
      return false;
    }
    if (!checkEmpty(arr)) { // basoviy sluchai
      return arr;
    }

    const arrX = [];
    const arrY = [];

    for (let x = 0; x < arr.length; x += 1) {
      for (let y = 0; y < arr[x].length; y += 1) {
        if (arr[x][y] === '-') {
          arrX.push(x);
          arrY.push(y);
        }
      }
    }
    for (let i = 1; i < 10; i += 1) {
      const testArr = arr;
      testArr[arrX[0]][arrY[0]] = i;
      if (rules(testArr)) {
        arr[arrX[0]][arrY[0]] = i;
        arr = solution(arr);
        if (checkEmpty(arr)) {
          arr[arrX[0]][arrY[0]] = '-';
        }
      }
    }
    return arr;
  }

 isSolved
  strToArr(boardString)


  return board




}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

//Возвращает Boolean решена ли доска
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

//Выводит заполненную доску на экран(Возможно консоль тейбл)

function prettyBoard(board) {

  let result = '';
  for (let index = 0; index < board.length; index++) {
    for (let i = 0; i < 3; i++) {
      result += board[index][i] + ' ';
    }
    result += ' ';
    for (let i = 3; i < 6; i++) {
      result += board[index][i] + ' ';
    }
    result += ' ';
    for (let i = 6; i < 9; i++) {
      result += board[index][i] + ' ';
    }
    result += `\n`;
    if(index === 2) {
      result += `\n`;
    } else if(index === 5){
      result += `\n`;
    }
  }
    return result;

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

const checkRow = require('./utils/fixRow');

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
  checkRow(boardString);
}

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

function makeTable(string) {
  const arr = [];
  for (let i = 0; i < string.length; i += 9) {
    arr.push(string.slice(i, (i + 9)).split(''));
  }
  
  return arr;
}

function isEmptySlot(table, place = [0, 0]) {
  for (let i = place[0]; i < 10; i += 1) {
    for (let j = place[1]; j < 10; j += 1) {
      if (table[i][j] === '-') {
        for (let k = 1; k < 10; k += 1) {
          superTest(table, i, k);
        }
      }
    }
    return false;
  }
}

function superTest(table, i, value) {
  findRow(table, i, value);
  // findColumn(table, i, value);
  // findBlock(table, i, value);
}

function findRow(table, i, num) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let str = table[0];
  let result;
  console.log(str)
  // for (let j = 0; j < str.length; j += 1) {
  //   if (str[j] !== '-') {
      result = arr.filter(item => {
        if (item != str[0]) return item;
      });
    // }
  // }
  console.log('------------------------------', result);
}
/* 
 superTest должен вызывать 3 функции для проверки по строке, столбцу и квадрату, передавая в каждую из них число для проверки

*/

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  makeTable,
  isEmptySlot,
};

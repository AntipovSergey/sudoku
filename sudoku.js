function solve(boardString) {
  // находим 0 и вычисляем его координаты
  function searchZeroInRowAndColumn(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '0') {
          console.log([i, j]);
          return [i, j];
        }
      }
    }
    return null;
  }
  searchZeroInRowAndColumn(boardString);
}


function isSolved(board) {

}


function prettyBoard(board) {

}


function changeOnZero(string) {
  const newString = string.replace(/-/gi, 0);
  return newString;
}

let str =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function makeStructure(string) {
  // создаем Таблицу из строк
  let rawArr = string.split('');
  let boardArr = [];
  let position = 0;
  for (let i = 0; i < 9; i++) {
    boardArr[i] = createRow(rawArr);
    position += 9;
  }

  function createRow(rawArr) {
    // создаем строку
    let row = [];
    for (let j = position; j < position + 9; j += 1) {
      row.push(rawArr[j]);
    }
    return row;
  }
  console.log(boardArr);
  return boardArr;
}

const board = makeStructure(changeOnZero(str));
solve(board);

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};

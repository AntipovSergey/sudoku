let boardString =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

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

function solve(boardString) {
  //замена на '0'
  const newString = boardString.replace(/-/gi, 0);

  // создаем Таблицу из строк
  let rawArr = newString.split('');
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
  console.table(boardArr);
  return boardArr;
}

solve(boardString);

function isSolved() {
  if (searchZeroInRowAndColumn(boardString) === null) {
    return true;
  } return false;
}

function checkZero(coordZero, board, num) {
  const row = coordZero[0];
  const column = coordZero[1];
  for (let i = 0; i < board[row].length; i++) {
    if (num === board[row][i] && i !== column) {
      return false;
    }
  }

}


function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};

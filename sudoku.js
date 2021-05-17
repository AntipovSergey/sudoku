let boardString =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

// находим 0 и вычисляем его координаты
function searchZero(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
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
      row.push(Number(rawArr[j]));
    }
    return row;
  }
  return boardArr;
  // if (!isSolved()) {
  // }
}

let boardArr = solve(boardString);

function isSolved() {
  if (searchZero(boardString) === null) {
    return true;
  }
  return false;
}

let coordZero = searchZero(boardArr);

console.log(checkZero(coordZero, boardArr));
console.table(boardArr);

function checkZero(coordZero, board, num = 1) {
  const r = coordZero[0];
  const c = coordZero[1];
  for (let i = 0; i < 9; i++) {
    if (num === board[r][i] && i !== c) return false;
    if (num === board[i][c] && i !== r) return false;
  }

  // проверка на нахождение NUM в BOX
  const boxRow = Math.floor(r / 3) * 3;
  const boxCol = Math.floor(c / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false;
      }
    }
  }
  return true;
}

function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};

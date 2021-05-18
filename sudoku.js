/* eslint-disable spaced-comment */
let boardString =
  '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';

//создаем доску
function createBoard(boardString) {
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
}
let boardArr = createBoard(boardString);

// находим 0 и вычисляем его координаты
function searchZero(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        // console.log([i, j]);
        return [i, j];
      }
    }
  }
  return null;
}

//проверяем подходит ли Num  по трем параметрам
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
//решатель, который запускается рекурсивно
function solve(boardArr) {
  //базовый случай
  if (searchZero(boardArr) === null) {
    return true;
  }
  const coordZero = searchZero(boardArr);
  for (let num = 1; num <= 9; num++) {
    const checkZ = checkZero(coordZero, boardArr, num);
    if (checkZ) {
      const r = coordZero[0];
      const c = coordZero[1];
      boardArr[r][c] = num;
      if (solve(boardArr)) {
        return true;
      }
      boardArr[r][c] = 0;
    }
  }
  return false;
}
solve(boardArr);

function isSolved() {
  if (searchZero(boardString) === null) {
    return true;
  }
  return false;
}

// let coordZero = searchZero(boardArr);

// console.log(checkZero(coordZero, boardArr));

function prettyBoard(board) {
  return board;
}



// Exports all the functions to use them in another file.
module.exports = {
  createBoard,
  solve,
  isSolved,
  prettyBoard,
};

function haveFreePlace(board) { // проверка что есть хотя бы одно место куда можно поставить
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === '-') {
        return true;
      }
    }
  }
  return false;
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let board = [];
  let varNumbers = [];
  for (let i = 0; i < 81; i += 1) { // создает массивы чисел которые можно поставить
    if (boardString[i] !== '-') {
      varNumbers.push([]);
      continue;
    }
    varNumbers.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
  for (let i = 0; i < 9; i += 1) { // создает пустой основно массив двумерный
    board.push([]);
  }
  for (let i = 0; i < 9; i += 1) { // записывает из строки в наш массив основной
    for (let j = 0; j < 9; j += 1) {
      board[i].push(boardString[i * 9 + j]);
    }
  }

  while (haveFreePlace(board)) { // работает пока есть хотя бы одно место куда поставить
    for (let i = 0; i < 9; i += 1) {// проход по всей таблице ищем место куда можем поставить
      for (let j = 0; j < 9; j += 1) {
        if (board[i][j] !== '-') { // если стоит цифра то идем дальше по массиву
          continue;
        }
        if (varNumbers[i * 9 + j].length === 1) {
          board[i].splice(j, 1, varNumbers[i * 9 + j][0]);// если для выбора отсалось одно число
          // то ставим его на это место
          continue;
        }
        varNumbers = checkSquare(board, varNumbers, i, j);
        if (varNumbers[i * 9 + j].length === 1) {
          board[i].splice(j, 1, varNumbers[i * 9 + j][0]);// если для выбора отсалось одно число
          // то ставим его на это место
          continue;
        }
        varNumbers = checkRow(board, varNumbers, i, j);
        if (varNumbers[i * 9 + j].length === 1) {
          board[i].splice(j, 1, varNumbers[i * 9 + j][0]);// если для выбора отсалось одно число
          // то ставим его на это место
          continue;
        }
        varNumbers = checkColumn(board, varNumbers, i, j);
        if (varNumbers[i * 9 + j].length === 1) {
          board[i].splice(j, 1, varNumbers[i * 9 + j][0]);// если для выбора отсалось одно число
          // то ставим его на это место
          continue;
        }
      }
    }
    console.log(varNumbers);
  }
  let boardStr = '';
  for (let i = 0; i < 9; i += 1) {
    boardStr += board[i].join('');
  }
  return boardStr;
}

function isSolved(board) {
  return true;
}

function prettyBoard(board) {
  let boardStr = '';
  let count = 0;
  for (let i = 0; i < 81; i += 1) {
    boardStr += board[i];
    count += 1;
    if (count === 9) {
      boardStr += '\n';
      count = 0;
    }
  }
  return boardStr;
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

function removeFromVar(curVarNumbers, value) {
  const index = curVarNumbers.findIndex((element) => element == +value);
  if (index === -1) {
    return curVarNumbers;
  }
  curVarNumbers.splice(index, 1);
  return curVarNumbers;
}

function checkRow(board, varNumbers, indexI, indexJ) {
  for (let j = 0; j < 9; j += 1) {
    if (board[indexI][j] !== '-') {
      const tmpArr = removeFromVar(varNumbers[indexI * 9 + indexJ], board[indexI][j]);
      varNumbers.splice(indexI * 9 + indexJ, 1, tmpArr);
    }
  }
  return varNumbers;
}

function checkColumn(board, varNumbers, indexI, indexJ) {
  for (let i = 0; i < 9; i += 1) {
    if (board[i][indexJ] !== '-') {
      const tmpArr = removeFromVar(varNumbers[indexI * 9 + indexJ], board[i][indexJ]);
      varNumbers.splice(indexI * 9 + indexJ, 1, tmpArr);
    }
  }
  return varNumbers;
}

function checkSquare(board, varNumbers, indexI, indexJ) {
  let curI = indexI;
  let curJ = indexJ;
  if (indexI < 3 && indexJ < 3) { // по квадратам ищем центтр
    indexI = 1;
    indexJ = 1;
  } else if (indexI < 3 && indexJ < 6 && indexJ > 2) {
    indexI = 1;
    indexJ = 4;
  } else if (indexI < 3 && indexJ < 9 && indexJ > 5) {
    indexI = 1;
    indexJ = 7;
  } else if (indexI < 6 && indexI > 2 && indexJ < 3) {
    indexI = 4;
    indexJ = 1;
  } else if (indexI < 6 && indexI > 2 && indexJ < 6 && indexJ > 2) {
    indexI = 4;
    indexJ = 4;
  } else if (indexI < 6 && indexI > 2 && indexJ < 9 && indexJ > 5) {
    indexI = 4;
    indexJ = 7;
  } else if (indexI < 9 && indexI > 5 && indexJ < 3) {
    indexI = 7;
    indexJ = 1;
  } else if (indexI < 9 && indexI > 5 && indexJ < 6 && indexJ > 2) {
    indexI = 7;
    indexJ = 4;
  } else if (indexI < 9 && indexI > 5 && indexJ < 9 && indexJ > 5) {
    indexI = 7;
    indexJ = 7;
  }
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      let xNear = indexI + i;
      let yNear = indexJ + j;
      if (board[xNear][yNear] !== '-') { // вычеркиваем если цифра из массива
        const tmpArr = removeFromVar(varNumbers[curI * 9 + curJ], board[xNear][yNear]);
        varNumbers.splice(curI * 9 + curJ, 1, tmpArr);
      }
    }
  }
  return varNumbers;
}

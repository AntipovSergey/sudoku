/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const result = [];
  for (let i = 0; i < boardString.length; i += 9) {
    result.push(boardString.slice(i, i + 9).split(""));
  }


}

function table(board, index, height) {
  let result = '';
  if (index < 3 && height < 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 6 && index >= 3 && height < 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 6; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 9 && index >= 6 && height < 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 6; j < 9; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 3 && height < 6 && height >= 3) {
    for (let i = 3; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 6 && index >= 3 && height < 6 && height >= 3) {
    for (let i = 3; i < 6; i++) {
      for (let j = 3; j < 6; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 9 && index >= 6 && height < 6 && height >= 3) {
    for (let i = 3; i < 6; i++) {
      for (let j = 6; j < 9; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 3 && height < 9 && height >= 6) {
    for (let i = 6; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 6 && index >= 3 && height < 9 && height >= 6) {
    for (let i = 6; i < 9; i++) {
      for (let j = 3; j < 6; j++) {
        result += board[i][j];
      }
    } return result;
  }
  if (index < 9 && index >= 6 && height < 9 && height >= 6) {
    for (let i = 6; i < 9; i++) {
      for (let j = 6; j < 9; j++) {
        result += board[i][j];
      }
    } return result;
  }

}

function table(board) {}

function stroke(board, height) {
  let result = "";
  for (let i = 0; i < 9; i++) {
    result += board[height][i];
  }
  return result;
}


function column(board) {

    let result = '';
      for (let i = 0; i < board.length; i += 1) {
          result += board[i][index]
        }
        return result
      }

}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const result = [];
  for (let i = 0; i < board.length; i += 9) {
    result.push(board.slice(i, i + 9).split(""));
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].indexOf("-") !== -1) return false;
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}


console.log(solve('1258726789922764152024118192191273267625834912145611512-7612331431221511612318912'));


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

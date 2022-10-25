/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const board = parseBoardString(boardString);
  if (solveRecursive(board)) return board;
}

function solveRecursive(board) {
  // находим ячейку с минимальным кол-вом кандидатов
  let minI; let minJ; let minCandidates;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '-') {
        const candidates = getCandidates(board, i, j);
        // если кандидатов в ячейке нет, значит такую доску нельзя решить
        if (candidates.length === 0) return false;
        if (!minCandidates || candidates.length < minCandidates.length) {
          minI = i;
          minJ = j;
          minCandidates = candidates;
        }
      }
    }
  }

  // если вся доска заполнена, значит решено
  if (!minCandidates) {
    return true;
  }

  // ставим каждого кандидата и рекурсивно запускаем solve
  for (let i = 0; i < minCandidates.length; i++) {
    board[minI][minJ] = minCandidates[i];
    if (solveRecursive(board)) return true;
  }

  // если решения не нашлось, важно вернуть в ячейку значение '-',
  // чтобы проверять ее в других ветках рекурсии
  board[minI][minJ] = '-';

  return false;
}

// преобразуем строку в 2мерный массив
function parseBoardString(boardString) {
  const result = [];
  for (let i = 0; i < boardString.length; i += 9) {
    result.push(boardString.slice(i, i + 9).split(''));
  }
  return result;
}
//получаем список кандидатов
function getCandidates(result, i, j) {
  const base = '123456789';
  for (let k = 0; k < 9; k++) {
    let summ = '';
    let uniqeString = '';
    summ = stroke(result, i) + table(result, j, i) + column(result, j);
    for (let b = 0; b < base.length; b++) {
      if (!summ.includes(base[b])) uniqeString += base[b];
    } return uniqeString;
  }
}

// ищем значения по таблице строке и колонке
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

function stroke(board, height) {
  let result = '';
  for (let i = 0; i < 9; i++) {
    result += board[height][i];
  }
  return result;
}


function column(board, index) {
  let result = '';
  for (let i = 0; i < board.length; i += 1) {
    result += board[i][index];
  }
  return result;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf('-') !== -1) return false;
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      process.stdout.write(`${board[i][j]} `);
      if ((j + 1) % 3 === 0) process.stdout.write('  ');
    }
    process.stdout.write('\n');
    if ((i + 1) % 3 === 0) process.stdout.write('\n');
  }
  return ("")
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

const chalk = require("chalk");

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(board) {
  solveBoard(board);
  return board;
}

function solveBoard(board) {
  let row = 0;
  let col = 0;
  let filledBoard = true;
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === 0) {
        row = i;
        col = j;
        filledBoard = false;
        break;
      }
    }
    if (!filledBoard) break;
  }
  if (filledBoard) return true;
  for (let i = 1; i <= 9; i += 1) {   
    if (canPlace(i, row, col, board)) {
      board[row][col] = i;
      if (solveBoard(board)) return true;
      else board[row][col] = 0;
    }
  }
  return false;
}

function canPlace(num, row, col, board) {
  // проверяет можно ли ставить элемент в эту точку
  for (let i = 0; i < board.length; i++) {
    // проверка строки
    if (board[row][i] === num) return false;
  }
  for (let i = 0; i < board.length; i++) {
    // проверка столбца
    if (board[i][col] === num) return false;
  }
  let startHorizontal = row - (row % 3); // откуда начинать считать квадрат по горизонтали
  let startVertical = col - (col % 3); // откуда начинать считать квадрат по вертикали
  for (let i = startHorizontal; i < startHorizontal + 3; i += 1) {
    // проверка квадрата
    for (let j = startVertical; j < startVertical + 3; j += 1) {
      if (board[i][j] === num) return false;
    }
  }
  return true; // если все выше не проходят, то возвращает, что можно ставить
} 

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  let line = [];
  let vertical = [];
  let square = [];
  for (let i = 0; i < board.length; i++) {
    line = board[i];
    for (let j = 0; j < board.length; j++) {
      if (line.indexOf(line[j]) !== line.lastIndexOf(line[j])) {
        console.log(i, 'line');
        return false
      };
    }
  }
  for (let i = 0; i < board.length; i++) {
    vertical = [];
    for (let j = 0; j < board.length; j++) {
      vertical.push(board[j][i]);
      if (vertical.indexOf(vertical[j]) !== vertical.lastIndexOf(vertical[j]))
        return false;
    }
  }
  for (let row = 0; row < board.length; row += 3) {
    for (let column = 0; column < array.length; column += 3) {
      for (let i = row; i < row + 3; i += 1) {
        for (let j = column; j < column + 3; j += 1) {
          square.push(board[i][j]);
        }
      }
      for (let k = 0; k < board.length; k += 1) {
        if (square.indexOf(square[k]) !== square.lastIndexOf(square[k])) {
          console.log(row, column, 'position of square');
          return false;
        }
      }
      
    }
    
  }
  return true;
}


// console.log(isSolved(array));

function makeBoard(arrBoard) {
  const res = arrBoard.split("");

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "-") {
      res[i] = 0;
    }

    res[i] = +res[i];
  }
  let start = 0;
  let finish = 8;
  let arrBig = [];
  for (let j = 0; j <= 8; j++) {
    let arrS = [];
    for (let r = start; r <= finish; r++) {
      arrS.push(res[r]);
    }
    // console.log(arrS)
    arrBig.push(arrS);
    start += 9;
    finish += 9;
  }
  return arrBig;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 *   //пример аргумента который ожидает функция

 */

function prettyBoard(board) {
  if (!Array.isArray(board)) {
    throw console.error(`В board должен быть массив, а пришел ${typeof board}`);
  }

  let res = board.map((row) => {
    //добавить пробел и разделитель каждому третьему элменту массива и склеить в строку
    row = row
      .map((iteam, index) => {
        return (index + 1) % 3 === 0 && index < 7 ? '' + iteam + " |" : iteam;
      })
      .join(" ");
    return row;
  });

  res = res.map((item, index) => {
    return (index + 1) % 3 === 0 && index < 7 ? ' ' + item + " \n                       " : ' ' + item + ' ';
  });

  //удалить лишние переносы в начале и конце
  res.unshift("\n      SUDOKU BOARD     ");
  lastRow = res[res.length - 1].trim();
  res.pop();
  res.push(lastRow);

  //раскраска
  const log = console.log;
  log(chalk.blue.bgMagentaBright.bold(res[0]))
  log(chalk.white.bgMagentaBright.bold('                       '))
  log(chalk.white.bgMagentaBright.bold(res[1]))
  log(chalk.white.bgMagentaBright.bold(res[2]))
  log(chalk.white.bgMagentaBright.bold(res[3]))
  log(chalk.white.bgMagentaBright.bold(res[4]))
  log(chalk.white.bgMagentaBright.bold(res[5]))
  log(chalk.white.bgMagentaBright.bold(res[6]))
  log(chalk.white.bgMagentaBright.bold(res[7]))
  log(chalk.white.bgMagentaBright.bold(res[8]))
  log(chalk.white.bgMagentaBright.bold(' ' + res[9] + ' '))
  log(chalk.white.bgMagentaBright.bold('                       '))

  return res;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  makeBoard,
  canPlace,
  solveBoard,
};

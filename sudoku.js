const chalk = require("chalk");

function solve(board) { // функция, которая возвращает массив после его решения
  solveBoard(board);
  return board;
}

function solveBoard(board) { // рекурсивная функция, которая возвращает тру/фолс
  let row = 0;
  let col = 0;
  let filledBoard = true; // переменная проверяет полностью ли заполнена доска
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === 0) { // если элемент по индексам i j не заполнен
        row = i;
        col = j;
        filledBoard = false; // доска не заполнена
        break;
      }
    }
    if (!filledBoard) break; // если мы нашли 0 выше, выходим из цикла
  }
  if (filledBoard) return true; // если заполнена, выходим из функции, возвращаем тру
  for (let i = 1; i <= 9; i += 1) {   
    if (canPlace(i, row, col, board)) { // проверяет можно ли поставить число i в данную клетку
      board[row][col] = i; // итерирует пока не найдет число, которое можно поставить
      if (solveBoard(board)) return true; // рекурсивно вызывает функцию и идет дальше
      else board[row][col] = 0; // если элемент выше не привел к решению, меняет себя на ноль
    }
  }
  return false; // этот путь не привел к решению
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

function isSolved(board) {
  let line = [];
  let vertical = [];
  let square = [];
  for (let i = 0; i < board.length; i++) { // проверка, что каждая строка валидна
    line = board[i];
    for (let j = 0; j < board.length; j++) {
      if (line.indexOf(line[j]) !== line.lastIndexOf(line[j]) && line[j] !== 0) {
        return false;
      };
    }
  }
  for (let i = 0; i < board.length; i++) { // проверка, что каждый столбец валиден
    vertical = [];
    for (let j = 0; j < board.length; j++) {
      vertical.push(board[j][i]);
      if (vertical.indexOf(vertical[j]) !== vertical.lastIndexOf(vertical[j]) && vertical[j] !== 0)
        return false;
    }
  }
  for (let row = 0; row < board.length; row += 3) { // проверка, что все квадраты валидны
    for (let column = 0; column < board.length; column += 3) {
      square = [];
      for (let i = row; i < row + 3; i += 1) { // цикл создает массив из отдельных квадратов
        for (let j = column; j < column + 3; j += 1) {
          square.push(board[i][j]);
        }
      }
      for (let k = 0; k < board.length; k += 1) { // проверяет, что данный квадрат валиден
        if (square.indexOf(square[k]) !== square.lastIndexOf(square[k]) && square[k] !== 0) {
          return false;
        }
      }
      
    }
    
  }
  return true;
}

function makeBoard(arrBoard) { // создает массив массивов из строки для работы
  const res = arrBoard.split(""); 

  for (let i = 0; i < res.length; i++) { // если элемент -, то заменяем на 0
    if (res[i] === "-") {
      res[i] = 0;
    }
    res[i] = +res[i];
  }
  let start = 0;
  let finish = 8;
  let arrBig = []; // конечный массив
  for (let j = 0; j <= 8; j++) {
    let arrS = [];
    for (let r = start; r <= finish; r++) { // массив, который будет строкой
      arrS.push(res[r]);
    }
    arrBig.push(arrS); // пушим массив элементов i-ой строки в конечный 
    start += 9;
    finish += 9;
  }
  return arrBig; // возвращаем массив массивов
}

function prettyBoard(board) { // рисуем крассивую доску
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

  return '';
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

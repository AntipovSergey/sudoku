// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    board.push(boardString.split('').slice(i, i + 9));
  }
  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === '-') {
        for (let z = 1; z <= 9; z += 1) {
          if (validRow(board, i, z) && validCol(board, j, z) && validBox(board, i, j, z)) {
            board[i][j] = z;
            if (isSolved(board)) return true;
            else board[i][j] = '-';
          }
        }
        return false;
      }
    }
  }
  return true;
}


// console.log(validBox(board_box,0,1,4));
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  return board.join('\n');
}


function validRow(board, row_index, num) {
  let check = true;
  board[row_index].forEach(el => {
    if (el == num) check = false
  })
  return check
}

function validCol(board, col_index, n) {
  for (let i = 0; i < 9; i += 1) {
    if (board[i][col_index] == n) {
      return false;
    }
  }
  return true;
}

function validBox(board, row_index, col_index, n) {
  let row = Math.floor(row_index / 3) * 3;
  let col = Math.floor(col_index / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[row + i][col + j] == n)
        return false;
    }
  }
  return true;
<<<<<<< HEAD
=======
}

//checking rows, columns, and squares

function globalCheck(board) {
  for (let i = 0; i < 9; i += 1) {
    const row = getRow(board, i);
    const column = getColumn(board, i);
    const square = getSquare(board, i + 1);
    if (!check(row) || !check(column) || !check(square)) {
      return false;
    }
  }
  return true;
}

//Функция которая принимает на вход судоку в табличном виде
//и номер строки - возвращает указанную строку в виде массива
function getRow(table, number) {
  return table[number];
>>>>>>> master
}

//Функция которая принимает на вход судоку в табличном виде
//и номер столбца - возвращает указанный столбец в виде массива
function getColumn(table, number) {
  const column = [];
  for (let i = 0; i < 9; i += 1) {
    column.push(table[i][number]);
  }
  return column;
}
//Функция которая принимает на вход судоку в табличном виде
//и номер малого квадрата - возвращает указанный квадрат в виде массива
function getSquare (table, number) {
  const square = [];
  let iStart = 0;
  let jStart = 0;
  let iEnd = 0;
  let jEnd = 0;
  switch (number) {
    case 1:
      iStart = 0;
      jStart = 0;
      iEnd = 3;
      jEnd = 3;
      break;
    case 2:
      iStart = 0;
      jStart = 3;
      iEnd = 3;
      jEnd = 6;
      break;
    case 3:
      iStart = 0;
      jStart = 6;
      iEnd = 3;
      jEnd = 9;
      break;
    case 4:
      iStart = 3;
      jStart = 0;
      iEnd = 6;
      jEnd = 3;
      break;
    case 5:
      iStart = 3;
      jStart = 3;
      iEnd = 6;
      jEnd = 6;
      break;
    case 6:
      iStart = 3;
      jStart = 6;
      iEnd = 6;
      jEnd = 9;
      break;
    case 7:
      iStart = 6;
      jStart = 0;
      iEnd = 9;
      jEnd = 3;
      break;
    case 8:
      iStart = 6;
      jStart = 3;
      iEnd = 9;
      jEnd = 6;
      break;
    case 9:
      iStart = 6;
      jStart = 6;
      iEnd = 9;
      jEnd = 9;
      break;
    default:
      break;
  }
  for (let i = iStart; i < iEnd; i += 1) {
    for (let j = jStart; j < jEnd; j += 1) {
      square.push(table[i][j]);
    }
  }
  return square;
}
//Функция принимает на вход массив (строку, cтолбец или квадрат) из
//девяти чисел и определяет является ли этот набор набором от 1 до 9
function check(set) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < 9; i += 1) {
    if (set.includes(numbers[i]) == false) {
      return false;
    }
  }
  return true;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
  validCol: validCol,
  globalCheck: globalCheck
}

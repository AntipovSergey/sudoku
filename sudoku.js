//Решение задачи
// вызываем формирование доски
function solve(puzzle) {
  // console.log("first changes");
  let board = stringToTable(puzzle);
  solveNumber(board);
  return board;
  // поиск позиции
}

function solveNumber(board) {
  let position = searchPos(board);
  if (searchPos(board) === null) {
    return board;
  }
  let row = position[0];
  let col = position[1];
  for (let i = 1; i < 10; i++) {
    const number = i.toString();
    let rowsColumns = isValid(board, row, col, number);
    let miniBoard = miniBoards(board, position, number);
    if (rowsColumns && miniBoard) {
      board[position[0]][position[1]] = number;
      if (solveNumber(board)) {
        return true;
      }
      board[position[0]][position[1]] = `-`;
    }
  }
  if (searchPos(board) === null) {
    return board;
  }
  return false;
}

//переприсваиваем входные данные

//  Выход Условие

//
// function recrution

//формирование  доски
function getArrayToString(puzzle) {
  const board = [];
  for (let i = 0; i < 81; i += 9) {
    board.push(puzzle.split("").slice(i, i + 9));
  }
  return board;
}

//Проверка строка столбец отдельно переприсвоить данные
function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i += 1) {
    if (board[row][i] === k || board[i][col] === k) {
      return false;
    }
  }
  return true;
}

//формирование  доски
function stringToTable(puzzle) {
  const arr = puzzle.split("");
  let board = [];
  for (let i = 0; i < arr.length; i += 9) {
    let row = arr.slice(i, i + 9);
    board.push(row);
  }
  return board;
}

//проверка миниборда
function miniBoards(board, position, number) {
  let x = -1,
    y = -1;
  const miniBoard = [];

  if (position[0] >= 0 && position[0] <= 2) {
    x = 0;
  } else if (position[0] >= 3 && position[0] <= 5) {
    x = 3;
  } else if (position[0] >= 6 && position[0] <= 8) {
    x = 6;
  }
  if (position[1] >= 0 && position[1] <= 2) {
    y = 0;
  } else if (position[1] >= 3 && position[1] <= 5) {
    y = 3;
  } else if (position[1] >= 6 && position[1] <= 8) {
    y = 6;
  }
  if (x === -1 || y === -1) {
    console.log("fatal eror:x||y do not is diapasone");
  }
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      miniBoard.push(board[i][j]);
    }
  }
  if (miniBoard.includes(number)) {
    return false;
  } else {
    return true;
  }
}

//первый пропуск
function searchPos(board) {
  for (let s = 0; s < 9; s++) {
    for (let c = 0; c < 9; c++) {
      if (board[s][c] == "-") {
        return [s, c];
      }
    }
  }
  return null;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  const copyBoard = [[], [], [], [], [], [], [], [], []];
  const copyBoard2 = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < board.length; i++) {
    const rows = board[i].slice();
    for (let k = 1; k < 10; k++) {
      copyBoard[i].push(board[i][k - 1]);
      copyBoard2[i].push(board[i][k - 1]);
      k = k.toString();
      if (rows.includes(k)) {
        rows.splice(rows.indexOf(k), 1);
      }
    }
    //console.log(copyBoard, copyBoard2);
    if (rows.length !== 0) {
      return false;
    }
  }
  while (copyBoard[0].length > 0) {
    const columns = [];
    for (let i = 0; i < board.length; i++) {
      columns.push(copyBoard[i].pop());
    }
    for (let i = 1; i < 10; i++) {
      i = i.toString();
      if (columns.includes(i)) {
        columns.splice(columns.indexOf(i), 1);
      }
    } //console.log(columns,copyBoard)
    if (columns.length !== 0) {
      return false;
    }
  }
  while (board[8].length > 0) {
    for (let k = 0; k < 9; k += 3) {
      const miniBoard = [];
      for (let i = 0; i < 3; i++) {
        miniBoard.push(board[k].pop());
        miniBoard.push(board[k + 1].pop());
        miniBoard.push(board[k + 2].pop());
      }
      for (let i = 1; i < 10; i++) {
        i = i.toString();
        if (miniBoard.includes(i)) {
          miniBoard.splice(miniBoard.indexOf(i), 1);
        }
      }
      if (miniBoard.length !== 0) {
        return false;
      }
    }
  }
  return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  stringToTable,
};

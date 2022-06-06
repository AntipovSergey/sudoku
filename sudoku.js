//Решение задачи
// вызываем формирование доски
boardString =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
let board = stringToTable(boardString);
console.log(typeof board);

function solve(board) {
  // console.log("first changes");

  // поиск позиции
  let position = searchPos(board);

  //переприсваиваем входные данные
  let row = position[1];
  let col = position[0];

  //  Выход Условие
  if (searchPos(board) === null) {
    return board;
  }

  //
  // function recrution
  for (let i = 1; i < 10; i++) {
    let rowsColumns = isValid(board, row, col, i);
    let miniBoard = miniBoards(board, position, i);
    if (rowsColumns && miniBoard) {
      board[position[0]][position[1]] = `${i}`;
      // console.log(board);
      solve(board);
    }
  }
}
console.log(solve(board));

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
    if (board[row][i] == k || board[i][col] == k) {
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
  let numbers = "";
  numbers += number;

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
  if (miniBoard.includes(numbers)) {
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
function isSolved(board) {}

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

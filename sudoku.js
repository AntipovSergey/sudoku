let boardString = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---";

function solve(boardString) {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(new Array(9).fill(null));
  }
  let stringIndex = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (boardString[stringIndex] !== '-') {
        board[i][j] = +boardString[stringIndex];
      }
      stringIndex++;
    }
  }
  return board;
}

function isEmpty(board) {
  let coordinates = [];
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === null) {
        coordinates = [x, y];
      }
    }
  }
  return coordinates;
}

function checkValue(board, number, coordinates) {
  let i = coordinates[0];
  let j = coordinates[1]
  for (let x = 0; x < board[i].length; x += 1) {
    for (let y = 0; y < board[j].length; y += 1) {
      if (board[x][y] === number) { return false; }
    }
    let box_x = number[Math.floor(i / 3)];
    let box_y = number[Math.floor(j / 3)];

    for (let x = box_x * 3; x < box_x * 3 + 3; x += 1) {
      for (let y = box_y * 3; y < box_y * 3 + 3; y += 1) {
        if (board[x][y] === number) { return false; }
      }
    }
  }
  return true;
}
function sudokuSolver() {
  let board = solve(boardString);
  let find = isEmpty(board)
  if (find === false) {
    return true;
  }
  for (let digit = 0; digit < 10; digit += 1) {
    if (checkValue(board, digit, find)) {
      board[find] = digit;
    }
  }
  if (sudokuSolver(board))
    return true;
  return sudokuSolver(board);
}

console.log(sudokuSolver())

// Собираем в двумерный массив все позиции пустых клеток в формате [<позиция по горизонтали>, <позиция по вертикали>]
function findEmpty(arr) {
  const arrN = [];
  for (let i = 0; i < arr.length; i++) {
    for (let g = 0; g < arr[i].length; g++) {
      if (arr[i][[g]] === "-") {
        arrN.push([i, g]);
      }
    }
  }
  return arrN;
}
// num - подставляемое число
// Проверяем подходит ли число в кубе
function checkSquare(arr, pos, num) {
  const [r, c] = pos; // Деструктуризация получаем данные о позиции
  const boxRow = Math.floor(r / 3) * 3;
  const boxCol = Math.floor(c / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (arr[i][j] === num && i !== r && j !== c) {
        return false;
      }
    }
  }
  return true;
}
// example [1,1] - верхний левый угол  [0,0]
// const boxRow = Math.floor(1 / 3) * 3;   0*3
// const boxCol = Math.floor(1 / 3) * 3;   0*3

// example [7,7] - верхний левый угол  [6,6]
// const boxRow = Math.floor(7 / 3) * 3;   0*3
// const boxCol = Math.floor(7 / 3) * 3;   0*3

// Собираем входящую строку с судоку в двумерный массив
function createArrays(boardString) {
  const result = [];
  const boardArr = boardString.split("");
  while (boardArr.length > 0) {
    result.push(boardArr.splice(0, 9));
  }
  return result;
}
// Проверяем подходит ли число по вертикали
function checkRow(arr, pos, num) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[pos[0]][i] === num && i !== pos[1]) {
      return false;
    }
  }
  return true;
}
// Проверяем подходит ли число по горизонтали
function checkColumn(arr, pos, num) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][pos[1]] === num && i !== pos[0]) {
      return false;
    }
  }
  return true;
}
// Общая проверка подходит ли число по всем правилам
function checkNum(arr, pos, num) {
  return (
    checkColumn(arr, pos, num) &&
    checkRow(arr, pos, num) &&
    checkSquare(arr, pos, num)
  );
}
// Заполнение доски простыми подстановками одного возможного варианта в несколько итераций
function fillBoard(board, prevBoard = "") {
  const emptyPosArr = findEmpty(board);
  const numArr = [];
  const boardIn = board.map((el) => el.join("")).join("");

  if (board.flat().indexOf("-") === -1) {
    return true;
  }
  if (prevBoard === boardIn) {
    return false;
  }

  for (let i = 0; i < emptyPosArr.length; i++) {
    for (let j = 1; j < 10; j++) {
      if (checkNum(board, emptyPosArr[i], j.toString())) {
        numArr.push(j.toString());
      }
    }
    if (numArr.length === 1) {
      const [posR, posC] = emptyPosArr[i];
      board[posR][posC] = numArr[0];
    }
    numArr.length = 0;
  }
  return fillBoard(board, boardIn);
}
// Заполнение доски с помощью перебора всех возможных вариантов
function fillBoardSmart(board, emptyPosArr, curPos) {
  if (curPos === emptyPosArr.length) {
    return true;
  }

  const numArr = [];
  const [posR, posC] = emptyPosArr[curPos];
  const boardArr = board;

  for (let i = 1; i < 10; i += 1) {
    if (checkNum(board, [posR, posC], i.toString())) {
      numArr.push(i.toString());
    }
  }

  for (let i = 0; i < numArr.length; i += 1) {
    boardArr[posR][posC] = numArr[i];
    if (fillBoardSmart(board, emptyPosArr, curPos + 1)) {
      return true;
    }
    boardArr[posR][posC] = "-";
  }
  return false;
}

function checkInputBoard(board) {
  return board.every((el, index, arr) => {
    for (let i = 0; i < el.length; i += 1) {
      if (el[i] !== '-' && !checkNum(arr, [index, i], el[i])) {
        return false;
      }
    }
    return true;
  });
}
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const boardArr = createArrays(boardString);
  let emptyPosArr = [];
  console.log(checkInputBoard(boardArr));
  if (checkInputBoard(boardArr)) {
    fillBoard(boardArr); // Сначала заполняем доску всеми однозначными вариантами числа

    emptyPosArr = findEmpty(boardArr); // Получаем все позиции оставшихся пустых клеток


  if (emptyPosArr.length > 0) {
    // Если остались пыстые клетки то заполняем их перебором
    fillBoardSmart(boardArr, emptyPosArr, 0);
  }
  console.log(prettyBoard(boardArr));
  console.log(boardArr);
  return boardArr;
}
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return !board.flat().includes("-");
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

function prettyBoard(board) {
  return board.map((el) => el.join(" ")).join("\n");
}
// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  findEmpty,
  checkSquare,
  createArrays,
  checkRow,
  checkColumn,
  fillBoard,
  fillBoardSmart,
};

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log(boardString)
  let newbBoard = [];
  let boardArray = createArrayFromString(boardString);

  if (isSolved(boardArray)) {
    return newbBoard;
  }

  let emptyValue = findFirstEmptyElement(boardArray);
  for (let i = 1; i <= 9; i++) {
    if (!checkNumbersInRow(boardArray, i, emptyValue[0]) &&
      !checkNumbersInColumn(boardArray, i, emptyValue[1]) &&
      !checkNumbersInSquare(boardArray, i, emptyValue)) {
      newbBoard = fillCell(emptyValue, i, boardArray);
      if (isSolved(newbBoard)) {
        return newbBoard;
      }
      newbBoard = solve(createStringFromArray(newbBoard));
    }
  }
  return boardArray;
}
///////////////////////////
///////////////////////////
function findFirstEmptyElement(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === '-') {
        return [i, j];
      }

    }
  }
  return false;
}
////////////////////////////
function fillCell(indexes, value, arr) {
  arr[indexes[0]][indexes[1]] = `${value}`;
  return arr;
}
///////////////////////////
///////////////////////////саша
function createStringFromArray(arr) {
  return arr.join('').split(',').join('');
}
///
function createArrayFromString(board) {
  let arrRes = []
  let arr2 = board.split('');
  let arr = []
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr2[i]);
    if ((i + 1) % 9 === 0) {
      arrRes.push(arr);
      arr = [];
    }
  }
  return arrRes;
}
/////////////////////////////саша
////////////////////////////


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '-' || i !== 9 || j !== 9) {
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
function prettyBoard(board) {
  let arr2 = [...[...board]];
  let arr1 = [];
  let string = '';
  console.log('123')
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2.splice(0, 9));
    string = arr1[i].join(' ');
    console.log(string);
  }
}



// Функция checkNumbersInSquare
// проверяет цифру (value) с индексами indexRow, indexColumn
// на присутствие в квадрате (array)
// возвращает  true / false
function checkNumbersInSquare(array, value, [indexRow, indexColumn]) {
  // поиск в квадрате 1
  if ((indexRow <= 2) && (indexColumn <= 2)) {
    for (let i = 0; i <= 2; i += 1) {
      if (array[i].slice(0, 3).join('').includes(value) || array[i].slice(0, 3).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
  // поиск в квадрате 2
  if ((indexRow <= 2) && (indexColumn >= 3 && indexColumn < 6)) {
    for (let i = 0; i <= 2; i += 1) {
      if (array[i].slice(3, 6).join('').includes(value) || array[i].slice(3, 6).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
  // поиск в квадрате 3
  if ((indexRow <= 2) && (indexColumn >= 6)) {
    for (let i = 0; i <= 2; i += 1) {
      if (array[i].slice(6).join('').includes(value) || array[i].slice(6).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
  // поиск в квадрате 4
  if ((indexRow >= 3 && indexRow < 6) && (indexColumn <= 2)) {
    for (let i = 3; i <= 5; i += 1) {
      if (array[i].slice(0, 3).join('').includes(value) || array[i].slice(0, 3).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
  // поиск в квадрате 5
  if ((indexRow >= 3 && indexRow < 6) && (indexColumn >= 3 && indexColumn < 6)) {
    for (let i = 3; i <= 5; i += 1) {
      if (array[i].slice(3, 6).join('').includes(value) || array[i].slice(3, 6).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
  // поиск в квадрате 6
  if ((indexRow >= 3 && indexRow < 6) && (indexColumn >= 6)) {
    for (let i = 3; i <= 5; i += 1) {
      if (array[i].slice(6).join('').includes(value) || array[i].slice(6).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
  // поиск в квадрате 7
  if ((indexRow >= 6) && (indexColumn <= 2)) {
    for (let i = 6; i <= 8; i += 1) {
      if (array[i].slice(0, 3).join('').includes(value) || array[i].slice(0, 3).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
  // поиск в квадрате 8
  if ((indexRow >= 6) && (indexColumn >= 3 && indexColumn < 6)) {
    for (let i = 6; i <= 8; i += 1) {
      if (array[i].slice(3, 6).join('').includes(value) || array[i].slice(3, 6).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
  // поиск в квадрате 9
  if ((indexRow >= 6) && (indexColumn >= 6)) {
    for (let i = 6; i <= 8; i += 1) {
      if (array[i].slice(6).join('').includes(value) || array[i].slice(6).join('').includes(String(value))) {
        return true;
      }
    }
    return false;
  }
}
// Функция checkNumbersInRow
// проверяет цифру (value) с индексами indexRow, indexColumn 
// на присутствие в линии по горизонтали (array)
// возвращает  true / false
function checkNumbersInRow(array, value, indexRow) {
  if (array[indexRow].join('').includes(value) || array[indexRow].join('').includes(String(value))) {
    return true;
  }
  return false;
}
///
// Функция checkNumbersInColumn
// проверяет цифру (value) с индексами indexRow, indexColumn 
// на присутствие в линии по вертикали (array)
// возвращает  true / false
function checkNumbersInColumn(array, value, indexColumn) {
  for (let i = 0; i < array.length; i += 1) {
    if ((String(array[i][indexColumn]) === value) || (array[i][indexColumn] === String(value))) {
      return true;
    }
  }
  return false;
}
///////////////////////////////////
///////////////////////////////////
let result = solve('-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-')
prettyBoard(result);
// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}


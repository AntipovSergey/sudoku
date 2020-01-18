// // Takes a board as a string in the format
// // you see in the puzzle file. Returns
// // something representing a board after
// // your solver has tried to solve it.
// // How you represent your board is up to you!
function solve(boardString) {

}


// // Returns a boolean indicating whether
// // or not the provided board is solved.
// // The input board will be in whatever
// // form `solve` returns.
function isSolved(board) {

}


// // Takes in a board in some form and
// // returns a String that's well formatted
// // for output to the screen.
// // The input board will be in whatever
// // form `solve` returns.
function prettyBoard(board) {
  console.table(board);
}

let string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function convertArr(value) {
  let array = string.replace(/-/g, 0);
  let arr = array.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i += 9) {
    newArr.push(arr.slice(i, i + 9));
  }
  return newArr;
}


const boxes = {
  0: [[0, 0], [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 2],
  [2, 0], [2, 1], [2, 2]],

  1: [[0, 3], [0, 4], [0, 5],
  [1, 3], [1, 4], [1, 5],
  [2, 3], [2, 4], [2, 5]],

  2: [[0, 6], [0, 7], [0, 8],
  [1, 6], [1, 7], [1, 8],
  [2, 6], [2, 7], [2, 8]],

  3: [[3, 0], [3, 1], [3, 2],
  [4, 0], [4, 1], [4, 2],
  [5, 0], [5, 1], [5, 2]],

  4: [[3, 3], [3, 4], [3, 5],
  [4, 3], [4, 4], [4, 5],
  [5, 3], [5, 4], [5, 5]],

  5: [[3, 6], [3, 7], [3, 8],
  [4, 6], [4, 7], [4, 8],
  [5, 6], [5, 7], [5, 8]],

  6: [[6, 0], [6, 1], [6, 2],
  [7, 0], [7, 1], [7, 2],
  [8, 0], [8, 1], [8, 2]],

  7: [[6, 3], [6, 4], [6, 5],
  [7, 3], [7, 4], [7, 5],
  [8, 3], [8, 4], [8, 5]],

  8: [[6, 6], [6, 7], [6, 8],
  [7, 6], [7, 7], [7, 8],
  [8, 6], [8, 7], [8, 8]]
};

// let board = convertArr(string);
// console.table(board);
let board = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],
  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 9],

];

//получаем существующие числа для горзионтальной линии
const checkHorizontalLine = (arr) => {
  let horizontalLineNumbers = [];
  arr.forEach((element, index) => {
    horizontalLineNumbers[index] = [];
    element.filter(i => i != 0).map(j => horizontalLineNumbers[index].push(j));
  });
  return horizontalLineNumbers;
}


//получаем существующие числа для вертикальной линии
const checkVerticalLine = (arr) => {
  let verticalLineNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    verticalLineNumbers[i] = [];
    for (let j = 0; j < arr.length; j++) {
      verticalLineNumbers[i].push(board[j][i])
    }
  }
  verticalLineNumbers = verticalLineNumbers.map(i => i.filter(j => j != 0));
  return verticalLineNumbers;
}


//получаем существующие числа для текущей большой ячейки 3х3
function checkNumbersBoxes(board, obj) {
  let boxNumbers = [];
  let keys = Object.keys(obj);
  keys.forEach((element, index) => {
    boxNumbers[index] = [];
    obj[element].map(i => boxNumbers[index].push(board[i[0]][i[1]]));
  });
  boxNumbers = boxNumbers.map(i => i.filter(j => j != 0));
  return boxNumbers;
}


//получаем возможные числа для всех ячеек
const getUniqueNumbers = (arr, horizontalLineNumbers, verticalLineNumbers, boxNumbers) => {
  let checkNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let uniqueNumbers = {};
  arr.forEach((element, row) => {
    element.forEach((cell, col) => {
      if (cell == 0) {
        let currentBoxNumber = getBoxNumber(boxes, row, col);
        let currentHorizontalNumbers = horizontalLineNumbers[row];
        let currentVerticalNumbers = verticalLineNumbers[col];
        let currentBoxNumbers = boxNumbers[currentBoxNumber];
        let allTheCurrentNumbers = [...currentHorizontalNumbers, currentBoxNumbers, currentVerticalNumbers];
        allTheCurrentNumbers = allTheCurrentNumbers.flat();
        let freeNumbers = checkNumbersArr.filter(i => allTheCurrentNumbers.indexOf(i) == -1);
        uniqueNumbers[[row, col]] = freeNumbers;
      }
    });
  });
  return uniqueNumbers;
}


//получаем номер большой ячейки 3х3
const getBoxNumber = (boxes, row, col) => {
  let currentBoxNumber;
  let keys = Object.keys(boxes);
  keys.forEach((box) => {
    let point = [row, col];
    boxes[box].map(i => (JSON.stringify(i) == JSON.stringify(point)) ? currentBoxNumber = box : currentBoxNumber)
  });
  return currentBoxNumber;
}

const sudoku = (board) => {
  let amountOfZero = amountOfZeroes(board);
  if (amountOfZero == 0) {
    return board;
  }
  let horizontalLineNumbers = checkHorizontalLine(board);
  let verticalLineNumbers = checkVerticalLine(board);
  let boxNumbers = checkNumbersBoxes(board, boxes);
  let uniqueNumbers = getUniqueNumbers(board, horizontalLineNumbers, verticalLineNumbers, boxNumbers);
  uniqueNumbers = filterUniqueNumbers(uniqueNumbers);
  let pointsOfNumbersWithOneOption = getPoints(uniqueNumbers);
  board = setNumbers(board, pointsOfNumbersWithOneOption, uniqueNumbers);

  return sudoku(board);
}

//проверяем количество пустых точек
const amountOfZeroes = (board) => {
  let amountOfZero = 0;
  board.forEach(element => {
    element.forEach(cell => {
      if (cell == 0) {
        amountOfZero++;
      }
    });
  });
  return amountOfZero;
}

//оставляем только элементы с одним возможным вариантом
const filterUniqueNumbers = obj => {
  for (const key in obj) {
    if (obj[key].length != 1) {
      delete obj[key];
    }
  }
  return obj;
}


//получаем координаты элементов с одним возможным вариантом
const getPoints = (obj) => {
  let keys = Object.keys(obj);
  keys = keys.map(i => i.split(','));
  return keys;
}


//устаналиваем в пустые ячейки числа с одним возможным вариантом
const setNumbers = (board, points, obj) => {
  points.forEach(point => {
    board[point[0]][point[1]] = Number.parseInt(obj[point].join(''));
  });
  return board;
}
console.table(sudoku(board));


//считаем количество пустых ячеек


module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}





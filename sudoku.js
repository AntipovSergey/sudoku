// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}

const testBoard = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [0, 0, 4, 0, 0, 8, 1, 9, 0],
  [1, 9, 0, 0, 7, 3, 0, 6, 7],
  [6, 2, 0, 8, 3, 0, 9, 0, 0],
  [0, 0, 0, 6, 1, 0, 5, 0, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0],
];

// возвращает массив координат пустых ячеек в виде  [[ 4, 8 ], [ 5, 0 ], ...
function findEmptyCells(testBoard) {
  const emptyCells = [];

  for (let i = 0; i < testBoard.length; i += 1) {
    for (let j = 0; j < testBoard[i].length; j += 1) {
      if (testBoard[i][j] === 0) {
        emptyCells.push([i, j]);
      }
    }
  }
  return emptyCells;
}
const blankSpaces = findEmptyCells(testBoard);


function prepareData (testBoard) {
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
  }
const randomNumber = getRandomNumber(1, 9);


// берет первое пустое место
function getBlank() {
  for (let i = 0; i < blankSpaces.length; i++) {
      let x = blankSpaces[i][0];
      let y = blankSpaces[i][1];
       if (testBoard[x][y] === 0) {
          return [x, y];
       }
  }
}

const blank = getBlank();
const row = blank[0];
const column = blank[1];
return [row, column, randomNumber];
}

const dataArr = prepareData(testBoard);

// проверяет возможность вставки по блоку 3х3
function checkSquare(testBoard, row, column, value) {
  let columnCorner = 0;
  let rowCorner = 0;
  const squareSize = 3;

  while (column >= columnCorner + squareSize) {
    columnCorner += squareSize;
  }

  while (row >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }

  for (let i = rowCorner; i < rowCorner + squareSize; i += 1) {
    for (let j = columnCorner; j < columnCorner + squareSize; j += 1) {
      if (testBoard[i][j] === value) {
        return false;
      }
    }
  }

  return true;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

// Возвращает логическое значение (true/false), указывающее, решена ли предоставленная таблица.
function isSolved(board) {
	let newArr = []
    newArr.push(board);
	for (let i = 0; i < newArr.length; i++) {
		for (let j = 0; j < newArr.length; j++) {
            if (newArr[i] === undefined) {
                newArr[i] += null;
            };
			//newArr.push(newArr[i][j]);
			// console.log(newArr);
		}
	};
	for (let k = 0; k < newArr.length; k++) {
		if (newArr[k] === 0 || newArr[k] !== undefined) {
			return false;
		}
	}
	return true;
}

// Проверяет горизонталь и вертикаль на возможность добавления числа
function checklLines(array, row, column, element) {
	let result = 0;
	for (let x = 0; x < array[row].length; x++) {
		if (element === array[row][x]){
      result++;
		}
	}

	for (let y = 0; y < array.length; y++) {
		if (array[y][column] === element){
			result++;
		}
	}
    return result === 0;
}
console.log(blankSpaces);
console.log('Координата x, координата y, вставляемый элемент: ' + dataArr);
function addNumber (dataArr){
  const isRightLines = checklLines(testBoard, dataArr[0], dataArr[1], dataArr[2]);
  const isRightSquare = checkSquare(testBoard, dataArr[0], dataArr[1], dataArr[2]);
  console.log('Проверка на линии ' + isRightLines);
  console.log('Проверка на блок ' + isRightSquare);
  if (isRightLines && isRightSquare) {
  testBoard[dataArr[0]][dataArr[1]] = dataArr[2];
}
  let newTestBoard = testBoard;
  return newTestBoard;
}
addNumber(dataArr);
console.log(testBoard);


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.


function prettyBoard(board) {
	let arr=[]
	let str=""
	for(let i=0;i<board.length;i+=9){
		for(let j=0;j<9;j++){
			str+=board[i+j]
		}
		arr.push(str)
		str=""

	}
	return arr.join(`\n`)

}

module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

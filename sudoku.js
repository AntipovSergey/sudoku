// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
  // разбиваем строку в на двумерный массив
  const sudokuArr = [];
  const b = boardString.split('');

  for (let i = 9; i <= boardString.length; i += 9) {
    const c = b.slice(i - 9, i);
    sudokuArr.push(c);
  }

  const wow = findEmpty(sudokuArr);
  return wow;

  // ищем "-"
  function findEmpty(sudokuArr) {
    for (let i = 0; i < sudokuArr.length; i += 1) {
      for (let j = 0; j < sudokuArr[i].length; j += 1) {
        if (sudokuArr[i][j] === '-') {
          const { horDigits, vertDigits, blockDigitsFin } = lookForDigits(i, j);
          const rightResult = checkForRightDigit(horDigits, vertDigits, blockDigitsFin);
          sudokuArr[i][j] = rightResult;
        }
      }
    }
    // повторное прохождение массива
    function repeatChecking() {
      for (let i = 0; i < sudokuArr.length; i += 1) {
        if (sudokuArr[i].includes('-')) {
          return true;
        }
      }
      return false;
    }
    if (repeatChecking()) {
      return findEmpty(sudokuArr);
    } return sudokuArr;
  }
  // ищем квадрат с цифрами и записываем в массив
  function squareFinder(i, j) {
    const blockDigits = [];
    const coordI = getCoords(i);
    const coordJ = getCoords(j);

    for (let k = coordI.start; k <= coordI.finish; k += 1) {
      for (let r = coordJ.start; r <= coordJ.finish; r += 1) {
        blockDigits.push(sudokuArr[k][r]);
      }
    }
    return blockDigits;
  }
  // получаем координаты искомого квадрата
  function getCoords(x) {
    if (x < 3) {
      return {
        start: 0,
        finish: 2,
      };
    }
    if (x >= 3 && x < 6) {
      return {
        start: 3,
        finish: 5,
      };
    }
    if (x >= 6) {
      return {
        start: 6,
        finish: 8,
      };
    }
  }
  // при найденном "-" производим поиск по горизонтали, вертикали
  // и в квадрате
  function lookForDigits(i, j) {
    const horDigits = sudokuArr[i];
    const vertDigits = [];
    const blockDigitsFin = squareFinder(i, j);

    for (let c = 0; c < 9; c += 1) {
      vertDigits.push(sudokuArr[0 + c][j]);
    }
    return {
      horDigits,
      vertDigits,
      blockDigitsFin,
    };
  }
  // поиск верного числа
  function checkForRightDigit(horDigits, vertDigits, blockDigitsFin) {
    const buffer = [];
    const fullSet = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let l = 0; l < fullSet.length; l += 1) {
      if (!horDigits.includes(fullSet[l]) && !vertDigits.includes(fullSet[l])
      && !blockDigitsFin.includes(fullSet[l])) {
        buffer.push(fullSet[l]);
      }
    }
    // передаем найденное число в случае, если оно одно
    if (buffer.length === 1) {
      return buffer[0];
    }
    return '-';
  }
// console.log(wow);
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let str = '';
  for(let i = 0; i < board.length; i += 1) {
    str += `${board[i].join(' ')}\n`;
  }
  return str;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

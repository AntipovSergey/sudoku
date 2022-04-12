const fs = require('fs');

const getStringFromFile = (num) => // получение строки из файла
  fs.readFileSync('sudoku-puzzles.txt', 'utf-8').split('\n')[num];
const getCreateBoard9x9 = (stringBoard) => {
// получение поля,принимает функцию получения строки getStringFromFile
  const newArr = [...Array(9)];
  let tmp = [...stringBoard];
  return newArr.map((el, index) => {
    el = tmp.slice(0, 9);
    tmp = tmp.slice(9);
    return el.join('');
  });
};
// console.log(getCreateBoard9x9(getStringFromFile(0)).join('\n'));

const getColumn = (arr, index) => arr.map((el) => el[index]);// получение столбца

const getBlock = (arr, column, str) => {
  const getBorder = (x) => ((x < 3) ? 3 : (x < 6) ? 6 : 9);
  const endStr = getBorder(str);
  const endColumn = getBorder(column);
  const board3x3 = [];
  for (let i = endColumn - 3; i < endColumn; i++) {
    board3x3.push(arr[i].slice(endStr - 3, endStr));
  }
  return board3x3.join('');
};

const maxItemStr = (arr) => {
  let minIndex = 0;
  let strIndex = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split('').filter((x) => x === '-').length <= strIndex
    && arr[i].split('').filter((x) => x === '-').length > 0) {
      strIndex = arr[i].split('').filter((x) => x === '-').length;
      minIndex = i;
    }
  }
  return minIndex;
};

function checker(arr) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return nums.filter((x) => !arr[0].includes(x) && !arr[1].includes(x) && !arr[2].includes(x));
}

// console.log(blok(board9x9, 7, 6));
// console.log(blok(board9x9, 0, 0))

// function solve(boardString) {
//   console.log('first changes');
//   return main()
// }

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  console.log(board);
  return board.filter((x) => x.includes('-')).length === 0;
}

// console.log(isSolved(getCreateBoard9x9(getStringFromFile(0))))

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  return board.join('\n');
}

// Exports all the functions to use them in another file.

const solve2 = (boardString) => {
  let board9x9 = getCreateBoard9x9(boardString);// первая строка из тхт
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 81; i++) {
      const minIndexStr = maxItemStr(board9x9); // строка с минимальным колличеством пропусков
      const indexColumn = board9x9[minIndexStr].indexOf('-'); // индекс столбца с минимальным колличеством пропусков
      const needBlock = getBlock(board9x9, minIndexStr, indexColumn); // блоки в котором находится пропуск
      const arr = [board9x9[minIndexStr], getColumn(board9x9, indexColumn).join(''), needBlock]; // цифры которым не должен быть равен пропуск
      const neededNums = checker(arr);
      // console.log(neededNums);

      if (neededNums.length === 1) {
        board9x9[minIndexStr] = board9x9[minIndexStr].split('');
        board9x9[minIndexStr][indexColumn] = neededNums[0];
        board9x9[minIndexStr] = board9x9[minIndexStr].join('');
      } else {
        board9x9[minIndexStr] = board9x9[minIndexStr].split('');
        board9x9[minIndexStr][indexColumn] = '+';
        board9x9[minIndexStr] = board9x9[minIndexStr].join('');
      }
    }
    board9x9 = board9x9.map((el) => el.replaceAll('+', '-'));
  }
  board9x9 = abc(board9x9.map((x) => x.split('')));
  // console.log(board9x9);
  // return board9x9.join('\n');
  return board9x9;
};

const solve = (boardString) => {
  const board9x9 = getCreateBoard9x9(boardString).map((x) => x.split(''));
  return abc(board9x9);
};

const abc = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      // console.log(board)
      const needBlock = getBlock(board, row, column);
      const neededNums = checker([board[row], getColumn(board, column).join(''), needBlock]);
      if (board[row][column] === '-') {
        for (let i = 1; i <= 9; i++) {
          if (neededNums.includes(i)) {
            board[row][column] = i;
            if (abc(board)) return board;
            board[row][column] = '-';
          }
        }
        return false;
      }
    }
  }
  return board;
};
// console.log(main());
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};


// console.log(main(getStringFromFile(9)));

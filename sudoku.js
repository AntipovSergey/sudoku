const fs = require('fs');

// eslint-disable-next-line no-use-before-define
function solve(board) {
  const cols = board.length;
  const boarded = board;
  // поиск пустой ячейки
  // eslint-disable-next-line no-use-before-define
  findEmpty(0, 0);
  function findEmpty(r, c) {
    for (let row = r; r < cols; row += 1) {
      for (let col = c; c < cols; col += 1) {
        if (board[row][col] === '-') {
          for (let k = 1; k < 10; k += 1) {
            // eslint-disable-next-line no-use-before-define
            if (checkNum(row, col, k, boarded) === true) {
              findEmpty(row, col);
            }
            // eslint-disable-next-line no-use-before-define
            if (row === 9 && col === 9) boarded[row][col] = k.toString();
          }
        }
      }
    }
    return false;
  }
}

// Сравнение переданной цифры в колонке строке и блоке
function checkNum(r, c, k, board) {
  const row = Math.floor((r / 3) * 3);
  const col = Math.floor((c / 3) * 3) - 1;
  for (let a = 0; a <= 3; a += 1) {
    for (let b = 0; b <= 3; b += 1) {
      if (board[row + a][col + b] === k.toString()) return false;
    }
  }
  return true;
}

function conversed() {
  const arr = fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf-8').split('\n');
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-use-before-define
    arr[i] = reversed(arr[i]);
  }
  return arr;
  function reversed(str) {
    const arrN = [];
    const strArr = str.split('');
    for (let k = 0; k < strArr.length; k += 1) {
      arrN.push(strArr.splice(0, 9));
      k = 0;
    }
    return arrN;
  }
}

const borderArray = conversed();
console.log(borderArray.map((el) => solve(el)));

// function prettyBoard(board) {
//   const stringReplace = board.toString().replace(/,/g, ' ');
//   const regex = /\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}/g;
//   const matchStr = stringReplace.match(regex);
//   const res = matchStr.map((el) => (`${el.slice(0, 6)} ${el.slice(6, 12)} ${el.slice(12)}`));
//   res.splice(3, 0, ' '.repeat(19));
//   res.splice(7, 0, ' '.repeat(19));
//   return res.join('\n');
// }

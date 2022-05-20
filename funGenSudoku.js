
const fs = require('fs');
const wordsArr = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').trim()
// .split('\n');

function funGenSudoku() {
  // принимает массив из 9 строк и возвращает массив из 9 строк
  let stringUdated = ''; //81 элемент с тире
  for (let d = 0; d < 81; d++) {
    stringUdated += wordsArr[d];
  }
  let arrBigString = stringUdated.replace(/\-/gim, '.') //можно применить к всему txt и он вернёт 729 элементов
  // 105802000090076405200400819019007306762083090000061050007600030430020501600308900
  // return arrBigString
  let funGenSudoku = []
  let w = 0;
  for (let i = 0; i < (arrBigString.length / 9); i++) {
    let arrSudokuNested = []
    for (let j = 0; j < (arrBigString.length / 9); j++) {
      arrSudokuNested.push(arrBigString[w])
      w++
    }
    funGenSudoku.push(arrSudokuNested)
  }
  return funGenSudoku
}
// console.table(funGenSudoku(wordsArr));
let input = (funGenSudoku(wordsArr))
module.exports = {
  funGenSudoku,
};
// ---------------------------------------------------------------------------------------------------------------------
/*

let solveSudoku = function (board) {
  const size = 9
  const boxSize = 2
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (bord[r][c] === '0') {
          return [r, c]
        }
      }
    }
    return null
  }
  const validate = (num, pos, board) => {
    const [r, c] = pos
    //cherk rows
    for (let i = 0; i < size; i++) {
      if (bord[i][c] === num && i !== r) {
        return false
      }
    }
    //check cols
    for (let i = 0; i < size; i++) {
      if (bord[r][i] === num && i !== c) {
        return false
      }
    }
    // }
    //check sols
    // const row = pos[0]
    // const col = pos[1]
    const boxRow = Math.floor(r / boxSize) * boxSize
    const boxCol = Math.floor(c / boxSize) * boxSize
    for (let i = boxRow; i < boxRow + boxCol; i++) {
      for (let j = boxRow; j < boxRow + boxCol; j++) {
        if (bord[i][j] === num && i !== r && j !== c) {
          return false
        }
        // const rElement = r[i]
        // if (bord[row][i] === num || bord[i][col] === num || bord[boxRowStart + Math.floor(i / boxSize)][boxColStart + i % boxSize] === num) {
        //   return false
      }
    }
    return true
  }

  const solve = () => {
    const currPos = findEmpty(board)
    if (currPos === null) {
      return true
    }
    for (let i = 0; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board)
      if (isValid) {
        const [x, y] = currPos
        board[x][y] = currNum
        if (solve()) {
          return true
        }

        board[x][y] = '0'

      }
    }

    return false
  }
  solve()
  return bord
}
console.log(input);
console.table(solveSudoku(input));
*/

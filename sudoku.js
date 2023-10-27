const { Linter } = require('eslint');
const fs = require('fs');

function read() {
  let puzzleRead = fs.readFileSync('./puzzles.txt', 'utf-8');
  puzzleRead = puzzleRead.split('\n').join('');
  let cnt = 0;
  const allPuzzlesArr = new Array(135);
  for (let i = 0; i < allPuzzlesArr.length; i++) {
    allPuzzlesArr[i] = [];
  }

  let arrayCounter = 0;
  for (let i = 0; i < puzzleRead.length; i++) {
    allPuzzlesArr[arrayCounter].push(puzzleRead[i]);
    cnt++;
    if (cnt === 9) {
      cnt = 0;
      arrayCounter++;
    }
  }

  const finalPuzzlesArr = new Array(15);
  for (let i = 0; i < finalPuzzlesArr.length; i++) {
    finalPuzzlesArr[i] = [];
  }
  cnt = 0;
  arrayCounter = 0;
  for (let i = 0; i < allPuzzlesArr.length; i++) {
    finalPuzzlesArr[arrayCounter].push(allPuzzlesArr[i]);
    cnt++;
    if (cnt === 9) {
      cnt = 0;
      arrayCounter++;
    }
  }
  return finalPuzzlesArr;
}

const game1 = read(0);

function solve(game) {

  let findings = [];
  let sum = 0;
  let arrMisElsAll = [];

  function contains(arr, elem) {
    return arr.filter(item => !elem.includes(Number(item)))
  }

  game[0].forEach((line) => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arrMisEls = [];
    let newLine = line.map((el) => Number(el))
    for (let i = 0; i < line.length; i++) {
      if (line[i] !== '-') {
        sum += Number(line[i])
      }

    }
    findings.push(45 - sum);
    sum = 0

    arrMisEls = contains(arr, newLine)
    arrMisElsAll.push(arrMisEls)

  })

  game[0].forEach((line) => {

    for (let i = 0; i < line.length; i++) {
      let n = -1;
      if (line[i] == '-') {
        line[i] = (arrMisElsAll[i][n + 1]).toString()
      }
    }
  })

  console.log(arrMisElsAll);
  console.log(findings);
  return game[0];

}

console.log(solve(game1));


// Проверки:



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */



  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */



function isSolved(solve) {
  // Принимает игровое поле в том формате, в котором его вернули из функции solve.
  // Возвращает булевое значение — решено это игровое поле или нет.
  let sumOfOneThing = 0;
  for (let i = 0; i <= 9; i++) {
    sumOfOneThing += i;
  }

  let sumOfAll = 0;
  for (let i = 0; i < 9; i++) {
    sumOfAll += sumOfOneThing;
  }
  return sumOfAll;

  const row;
  const column;
  const littleSquare;
  let sumOfRows;
  let sumOfColumns;
  let sum;
  // for (let row = 0; row < 9; row++) {
  //   for (let column = 0; column < 9; column++) {
  //   }
  // }
  for (let i = 0; i < 9; i++) {
    const a = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const b = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] == n || board[i][column] == n || board[a][b] == n) {
      return false;
    }
  }
  return true;

}

// console.log(isSolved());

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}


module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard
};

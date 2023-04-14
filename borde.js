const fs = require('fs');

// const readAndSolve = require('./readAndSolve');

const readFile = fs.readFileSync('./puzzles.txt', 'utf-8');

function solve(text) {
  const gameFull = text.split('\n');
  const game = gameFull[0]
    .split('')
    .map((el) => (el !== '-' ? Number(el) : el));
  const gameBoard = [];
  for (let i = 0; i < game.length; i += 9) {
    const slice = game.slice(i, i + 9);
    gameBoard.push(slice);
  }
  return gameBoard;
}

const arr = [
  [1, '-', 5, 8, '-', 2, '-', '-', '-'],
  ['-', 9, '-', '-', 7, 6, 4, '-', 5],
  [2, '-', '-', 4, '-', '-', 8, 1, 9],
  ['-', 1, 9, '-', '-', 7, 3, '-', 6],
  [7, 6, 2, '-', 8, 3, '-', 9, '-'],
  ['-', '-', '-', '-', 6, 1, '-', 5, '-'],
  ['-', '-', 7, 6, '-', '-', '-', 3, '-'],
  [4, 3, '-', '-', 2, '-', 5, '-', 1],
  [6, '-', '-', 3, '-', 8, 9, '-', '-'],
];

//? i - линия
// ?j - колонка
function findEmpty(gameBoard) {
  for (let i = 0; i < gameBoard.length; i += 1) {
    for (let j = 0; j < gameBoard.length; j += 1) {
      if (gameBoard[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return null
}
console.log(findEmpty(solve(readFile)));
// console.log(solve(readFile));

// TODO создать пустой массив [1,2,3,4,5,6,7,8,9]
// TODO проверить линию, колонку и квадрат

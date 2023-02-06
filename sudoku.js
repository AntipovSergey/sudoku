/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  //process.argv
}

('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
let task1 = [
  '--74916-5',
  '2---6-3-9',
  '-----7-1-',
  '-586----4',
  '--3----9-',
  '--62--187',
  '9-4-7---2',
  '67-83----',
  '81--45---',
];
// let column = '123456789';

function stringCandidates(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < 10; j++) {
      if (str.indexOf(j) == -1 && result.indexOf(j) == -1) {
        result += j;
      }
    }
  }
  return result;
}


function columnCandidates(str, candidates) {
  for (let i = 0; i < str.length; i++) {
    if (!(candidates.indexOf(str[i]) === -1)) {
      candidates = candidates.replace(str[i], '');
    }
  }
  return candidates;
}

console.log(columnCandidates('-2----968', '238'));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

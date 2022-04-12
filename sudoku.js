
// преобразует строку в массив
// const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// const boardString = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'
// const boardString = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9'
// const boardString = '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-'
// const boardString = '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--'
// const boardString = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'
// const boardString = '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--'
// const boardString = '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7'
// const boardString = '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----'
// const boardString = '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--'
// const boardString = '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-'
const boardString = '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-';
// const boardString = '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--'
// const boardString = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------'
// const boardString = '---------------------------------------------------------------------------------'

const board = solve(boardString);

// работает, возвращает массив с массивами
function solve(boardString) {
  const arr = [];
  for (let i = 0; i < boardString.length; i += 9) {
    arr.push(boardString.slice(i, i + 9).split(''));
  }
  return arr;
}
// находит первый свободный элемент и возвращает позицию
// работает! [g, v]
const cellCheck = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == '-') return [i, j];
    }
  }
  return null;
};

function isSolved(board) {

}
// проверяет элемент в строке
// работает, возвращает тру если нет цифры в строке
const row = (board, g, i) => {
  if (board[g].indexOf(i.toString()) == -1) {
    return true;
  }
  return false;
};
// работает, тру если элемента нет в столбце
const column = (board, v, i) => {
  let total = 0;
  for (let j = 0; j < board.length; j++) {
    if (Number(board[j][v]) == i) {
      total += 1;
    }
  }
  if (total < 1) {
    return true;
  }
  return false;
};
// работает, если находит цифру в квадрате - возвращает фолс
const square = (board, g, v, i) => {
  let total = 0;
  const g2 = Math.floor(g / 3) * 3;
  const v2 = Math.floor(v / 3) * 3;
  for (let j = g2; j < g2 + 3; j++) {
    for (let y = v2; y < v2 + 3; y++) {
      if (board[j][y] == i) total++;
    }
  }
  if (total < 1) {
    return true;
  }
  return false;
};
// добавил число в одну ячейку и тормознул, как перезапустить, продлить цикл
const cellFill = (board) => {
  const currPos = cellCheck(board);
  if (currPos === null) return true;
  const [g, v] = cellCheck(board);
  for (let i = 1; i <= 9; i++) {
    if (row(board, g, i) === true) {
      if (column(board, v, i) === true) {
        if (square(board, g, v, i) === true) {
          board[g][v] = i.toString();
          if (cellFill(board)) return board;
          board[g][v] = '-';
        }
      }
    }
  }
  return false;
};
// console.table(board);
const result = cellFill(board);
function prettyBoard(board) {
  const el = board.join('\n').replaceAll(',', '');
  return el;
}
console.table(prettyBoard(result));

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

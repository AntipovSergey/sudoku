const strToArr = require('./strtoarr');
const isInHorisontal = require('./isInHorisontal');
const isInVertical = require('./isInVertical');
const isInBlock = require('./isInBlock');

const puzzles = [
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
  '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3',
  '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9',
  '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-',
  '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--',
  '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----',
  '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--',
  '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7',
  '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----',
  '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--',
  '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-',
  '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-',
  '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--',
  '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------',
  '---------------------------------------------------------------------------------',
];

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  // const board = strToArr(boardString);
  const board = strToArr(puzzles[5]);
  let boardCopy = [];
  console.log('board start:\n', prettyBoard(board));
  solveEasy(board);
  //console.log();
  return board;
}

function solveEasy(board, boardCopy = []) {
  const checkArr = [];

  while (board.join('') !== boardCopy.join('')) {
    boardCopy.length = 0;
    boardCopy = [...JSON.parse(JSON.stringify(board))];

    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board.length; x++) {
        if (board[y][x] === '-') {
          for (let i = 1; i <= 9; i++) {
            if (
              isInHorisontal(i.toString(), y, x, board) &&
              isInVertical(i.toString(), y, x, board) &&
              isInBlock(i.toString(), y, x, board)
            ) {
              checkArr.push(i);
            }
          }
          if (checkArr.length === 1) {
            board[y][x] = checkArr[0].toString();
            checkArr.length = 0;
          }
        }
        checkArr.length = 0;
      }
    }
  }
  console.log(getTwoEmpty(board))
  return board;
}

function solveMedium(board, boardCopy = []) {}

function getTwoEmpty(board) {
  let tmpArr = [...board] // если сломалось смотреть сюда
  let possible = []
  for(let i = 0; i < tmpArr.length; i++){
    if((tmpArr[i].filter((el) => el === '-').length) == 2){
      possible.push([i, tmpArr[i].indexOf('-')], [i, tmpArr[i].lastIndexOf('-')])
      for (let j = 1; j <= tmpArr[i].length; j++){
        if(!tmpArr[i].includes(j.toString())) possible.push(j);
      }
      return possible;
    }
  }
}
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  let count = 0;
  board.forEach((row) =>
    row.forEach((element) => {
      if (element == '-') {
        count += 1;
      }
    })
  );
  return count === 0;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let consoleString = '---------------------\n';
  board.forEach((line) => (consoleString += '| ' + line.join(' ') + ' |\n'));
  consoleString += '---------------------\n';
  return consoleString;
}

console.log(prettyBoard(solve()));

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};

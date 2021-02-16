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
  const board = strToArr(puzzles[6]);
  // let boardCopy = [];
  console.log('board start:\n', prettyBoard(board));
  solveEasy(board);

  // if (getTwoEmptyInRow(board)) {
  //   solveMedium(board, getTwoEmptyInRow(board));
  // }
  // if (getThreeEmptyInRow(board)) {
  //   solveMedium(board, getThreeEmptyInRow(board));
  // }
  // if (getThreeEmptyInColumn(board).length > 0) {
  //   getThreeEmptyInColumn(board).forEach((guess) => {
  //     solveMedium(board, guess);
  //   });
  // }

  // if (!isSolved(board)) {
  //   if (getTwoEmptyInRow(board)) {
  //     solveMedium(board, getTwoEmptyInRow(board));
  //   }
  //   if (getThreeEmptyInRow(board)) {
  //     solveMedium(board, getThreeEmptyInRow(board));
  //   }
  //   if (getThreeEmptyInColumn(board)) {
  //     solveMedium(board, getThreeEmptyInColumn(board));
  //   }
  // }
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
  return board;
}

function solveMedium(board, guessArray, boardCopy = []) {
  console.log('guessArray', guessArray);
  console.log('guessArray board', prettyBoard(board));
  const checkArr = [];

  if (guessArray.length === 4) {
    boardCopy = [...JSON.parse(JSON.stringify(board))];
    const [coord1, coord2, val1, val2] = guessArray;
    if (
      isInVertical(val1.toString(), coord1[0], coord1[1], board) &&
      isInBlock(val1.toString(), coord1[0], coord1[1], board)
    ) {
      boardCopy[coord1[0]][coord1[1]] = val1.toString();
      boardCopy[coord2[0]][coord2[1]] = val2.toString();
    }

    solveEasy(boardCopy);

    if (isSolved(boardCopy)) {
      board = boardCopy;
    } else {
      console.log('else');
      boardCopy[coord1[0]][coord1[1]] = val2.toString();
      boardCopy[coord2[0]][coord2[1]] = val1.toString();
      solveEasy(boardCopy);
      board = boardCopy;
      console.log('boardChange', prettyBoard(board));
    }

    console.log('board = boardCopy', prettyBoard(board));

    if (isSolved(boardCopy)) {
      console.log(prettyBoard(boardCopy));
      console.log('solveeasy\n', prettyBoard(solveEasy(boardCopy)));
    }

    console.log(prettyBoard(boardCopy));
    console.log('solveeasy\n', prettyBoard(solveEasy(boardCopy)));
  }
  // =============================================================
  if (guessArray.length === 6) {
    boardCopy = [...JSON.parse(JSON.stringify(board))];
    const [coord1, coord2, coord3, val1, val2, val3] = guessArray;
    const vals = [val1, val2, val3];

    boardCopy[coord1[0]][coord1[1]] = val1.toString();
    boardCopy[coord2[0]][coord2[1]] = val2.toString();
    boardCopy[coord3[0]][coord3[1]] = val3.toString();

    solveEasy(boardCopy);
    if (isSolved) {
      board = boardCopy;
      console.log('solved1', prettyBoard(board));
    } else {
      boardCopy[coord1[0]][coord1[1]] = val2.toString();
      boardCopy[coord2[0]][coord2[1]] = val3.toString();
      boardCopy[coord3[0]][coord3[1]] = val1.toString();
      solveEasy(boardCopy);
      if (isSolved) {
        board = boardCopy;
        console.log('solved2', prettyBoard(board));
      } else {
        boardCopy[coord1[0]][coord1[1]] = val3.toString();
        boardCopy[coord2[0]][coord2[1]] = val1.toString();
        boardCopy[coord3[0]][coord3[1]] = val2.toString();
        solveEasy(boardCopy);
        if (isSolved) {
          board = boardCopy;
          console.log('solved3', prettyBoard(board));
        } else {
          boardCopy[coord1[0]][coord1[1]] = val1.toString();
          boardCopy[coord2[0]][coord2[1]] = val3.toString();
          boardCopy[coord3[0]][coord3[1]] = val2.toString();
          solveEasy(boardCopy);
          if (isSolved) {
            board = boardCopy;
            console.log('solved4', prettyBoard(board));
          } else {
            boardCopy[coord1[0]][coord1[1]] = val3.toString();
            boardCopy[coord2[0]][coord2[1]] = val2.toString();
            boardCopy[coord3[0]][coord3[1]] = val1.toString();
            solveEasy(boardCopy);
            if (isSolved) {
              board = boardCopy;
              console.log('solved5', prettyBoard(board));
            } else {
              boardCopy[coord1[0]][coord1[1]] = val2.toString();
              boardCopy[coord2[0]][coord2[1]] = val1.toString();
              boardCopy[coord3[0]][coord3[1]] = val3.toString();
              solveEasy(boardCopy);
              if (isSolved) {
                board = boardCopy;
                console.log('solved6', prettyBoard(board));
              } else {
                console.log('END');
              }
            }
          }
        }
      }
    }
  }
}

function getTwoEmptyInRow(board) {
  let tmpArr = [...board]; // если сломалось смотреть сюда
  let possible = [];
  for (let i = 0; i < tmpArr.length; i++) {
    if (tmpArr[i].filter((el) => el === '-').length == 2) {
      possible.push([i, tmpArr[i].indexOf('-')], [i, tmpArr[i].lastIndexOf('-')]);
      for (let j = 1; j <= tmpArr[i].length; j++) {
        if (!tmpArr[i].includes(j.toString())) possible.push(j);
      }
      return possible;
    }
  }
}

function getThreeEmptyInRow(board) {
  let tmpArr = [...board]; // если сломалось смотреть сюда
  let possible = [];
  for (let i = 0; i < tmpArr.length; i++) {
    if (tmpArr[i].filter((el) => el === '-').length == 3) {
      possible.push(
        [i, tmpArr[i].indexOf('-')],
        [i, tmpArr[i].indexOf('-', tmpArr[i].indexOf('-') + 1)],
        [i, tmpArr[i].lastIndexOf('-')]
      );
      for (let j = 1; j <= tmpArr[i].length; j++) {
        if (!tmpArr[i].includes(j.toString())) possible.push(j);
      }

      return possible;
    }
  }
}

function getThreeEmptyInColumn(board) {
  let tmpArr = [...board]; // если сломалось смотреть сюда
  let result = [];
  let possible = [];
  console.log(prettyBoard(board));

  for (let x = 0; x < board.length; x++) {
    let rowNum = x;
    for (let y = 0; y < board.length; y++) {
      if (tmpArr[y][x] === '-') {
        possible.push([y, x]);
      }
    }

    if (possible.length <= 3) {
      let str = '';
      for (let k = 0; k < board.length; k++) {
        if (tmpArr[k][rowNum] !== '-') str += tmpArr[k][rowNum];
      }
      for (let k = 1; k <= 9; k++) {
        if (!str.split('').includes(k.toString())) {
          possible.push(k.toString());
        }
      }
      result.push(JSON.parse(JSON.stringify(possible)));
      possible.length = 0;
    }
  }
  return result;
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

console.log('result\n', prettyBoard(solve()));

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};

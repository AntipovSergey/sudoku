const sudoku = require("./sudoku");
let board =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
let board2 =
  "--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3";
let board3 =
  "29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9";
let board4 =
  "-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-";
let board5 =
  "6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--";
let board6 =
  "---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----";
let board7 =
  "-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--";
let board8 =
  "-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7";
let board9 =
  "----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----";
let board10 =
  "3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--";
let board11 =
  "3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-";
let board12 =
  "-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-";
let board13 =
  "--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--";
let board14 =
  "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------";
let board15 =
  "---------------------------------------------------------------------------------";
let checkBox = boxMaiker(board);
function boxMaiker(board) {
  board = board.match(/(\S{3})/g);
  let arrBoxes = [];
  let alreadyIncludesInd = [];
  for (let i = 0; i < board.length; i++) {
    if (!alreadyIncludesInd.includes(i)) {
      let a = [board[i], board[i + 3], board[i + 6]].join("").split(",");
      arrBoxes.push(a);
      alreadyIncludesInd.push(i, i + 3, i + 6);
    }
  }
  return arrBoxes;
}
function solve(boardString) {
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      if (boardString[row][col] === "-") {
        for (let probNum = 1; probNum <= 9; probNum += 1) {
          if (isSolved(row, col, probNum, boardString) && checkBox) {
            boardString[row][col] = probNum;
            if (solve(boardString)) {
              return boardString;
            } else {
              boardString[row][col] = "-";
            }
          }
        }
        return false;
      }
    }
  }
  return boardString;
}
function isSolved(row, col, probNum, board) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == probNum || board[i][col] == probNum) {
      return false;
    }
  }
  return true;
}
function prettyBoard(board) {
  let arr = board.split("");
  let tempArr = [];
  let sudoku = [];
  let chunkSize = 9;
  for (let i = 0; i < arr.length; i += chunkSize) {
    tempArr = arr.slice(i, i + chunkSize);
    sudoku.push(tempArr);
  }
  return sudoku;
}
console.table(solve(prettyBoard(board)));

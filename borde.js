const fs = require("fs");
const boardString = fs.readFileSync("puzzles.txt", "utf8");
// Преобразование входной строки в двумерный массив.

function solve(text) {
  const SIZE = 9;
  const BOX_SIZE = 3;
  const arr = boardString.split("\n");
  const arr2 = arr[0].split("").map((el) => (el !== "-" ? Number(el) : el));
  const solutionBoard = [];
  for (let i = 0; i < arr2.length; i += SIZE) {
    const slice = arr2.slice(i, i + SIZE);
    solutionBoard.push(slice);
  }
  return solutionBoard;
}

// Функция поиска первой пустой позиции на доске. Возвращает null, если все позиции заполнены.

function findEmpty(board) {
  for (let row = 0; row < board.length; row += 1) {
    for (let colomn = 0; colomn < board.length; colomn += 1) {
      if (board[row][colomn] === "-") {
        return board[row,colomn];
      }
    }
  }
  return null
}
// console.log(findEmpty(solve(boardString)));

// 1-5 8-2 ---
// -9- -76 4-5
// 2-- 4-- 819
// -19 --7 3-6
// 762 -83 -9-
// --- -61 -5-
// --7 6-- -3-
// 43- -2- 5-1
// 6-- 3-8 9--

// --5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3
// 29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9
// -8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-
// 6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--
// ---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----
// -3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--
// -96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7
// ----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----
// 3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--
// 3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-
// -2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-
// --7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--
// ----------2-65-------18--4--9----6-4-3---57-------------------73------9----------
// ---------------------------------------------------------------------------------

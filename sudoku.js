function selectPuzzles(num) {
  let res = `1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--
  --5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3
  29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9
  -8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-
  6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--
  ---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----
  -3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--
  -96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7
  ----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----
  3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--
  3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-
  -2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-
  --7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--
  ----------2-65-------18--4--9----6-4-3---57-------------------73------9----------
  ---------------------------------------------------------------------------------
  `;
  const startArr = res.split('\n  ');
  let result = sudoku(startArr[num - 1]);
  return result;
}

// Обрабатывает данные в файле puzzles.txt
function sudoku(wholeLine) {
  let newArr = [];
  let newStr = wholeLine.split('');
  for (let i = 0; i < newStr.length; i += 9) {
    newArr.push(newStr.slice(i, i + 9).join(''));
  }
  return newArr;
}


/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  //process.argv
}

function isSolved(sBoard) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  // console.table(board);
  // let tempStr = '';
  // const xArr = [];
  // const str = '———|'.repeat(8);
  // for (let i = 0; i < board.length - 1; i++) {
  //   for (let j=0; j<9; j++) {
  //   tempStr += board[i][j];
  //   if ()
  //   }
  // }
  // return xArr.join('\n');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).

// module.exports = {
//   selectPuzzles,
//   solve,
//   isSolved,
//   prettyBoard,
// };

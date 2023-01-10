const itemSudoku = document.querySelectorAll('.item_number');
const drawButton = document.querySelector('.draw');
const solveButton = document.querySelector('.solve');
const refreshButton = document.querySelector('.refresh');
const stepButton = document.querySelector('.step');
const box = [
  [],
  ['1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'],
  ['--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'],
  ['29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9'],
  ['-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-'],
  ['6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--'],
  ['---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'],
  ['-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--'],
  ['-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7'],
  ['----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----'],
  ['3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--'],
  ['3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-'],
  ['-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-'],
  ['--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--'],
  ['----------2-65-------18--4--9----6-4-3---57-------------------73------9----------'],
  ['---------------------------------------------------------------------------------'],
];
let int = 0;

function getVal() {
  let select = document.getElementById('select');
  let value = select.value;
  return value;
}

function drawBoard() {
  const inpVal = getVal();
  const table = box[inpVal].join('').replaceAll('-', ' ');
  for (let i = 0; i < itemSudoku.length; i++) {
    itemSudoku[i].innerHTML = table[i];
  }
  return table.replaceAll(' ', '-');
}

function drawSolve() {
  const tab = solveS();
  const findChanges = drawBoard();

  for (let i = 0; i < itemSudoku.length; i++) {
    if (findChanges[i] !== tab[i]) {
      itemSudoku[i].innerHTML = tab[i];
      itemSudoku[i].style.backgroundColor = 'Gainsboro';
    }
  }
}

function refresh() {
  for (let i = 0; i < itemSudoku.length; i++) {
    itemSudoku[i].innerHTML = '';
    itemSudoku[i].style.backgroundColor = '';
  }
}

let board = getRows();

function getRows() {
  let rows = [];
  if (process.argv[2] === undefined) {
    rows = box[0].match(/.{9}/g).map((el) => el.split(''));
  } else {
    rows = box[process.argv[2]].match(/.{9}/g).map((el) => el.split(''));
  }
  return rows;
}

function getColumns() {
  const columns = [];
  let mincol = [];
  for (let i = 0; i < board.length; i++) {
    mincol = [];
    for (let j = 0; j < board[i].length; j++) {
      mincol.push(board[j][i]);
    }
    columns.push(mincol);
  }
  return columns;
}

function getSquares() {
  const squares = [[], [], [], [], [], [], [], [], []];
  let str1 = board;
  for (let i = 0; i < 9; i += 3) {
    squares[i].push(str1[i][0], str1[i][1], str1[i][2], str1[i + 1][0], str1[i + 1][1], str1[i + 1][2], str1[i + 2][0], str1[i + 2][1], str1[i + 2][2]);
    squares[i + 1].push(str1[i][3], str1[i][4], str1[i][5], str1[i + 1][3], str1[i + 1][4], str1[i + 1][5], str1[i + 2][3], str1[i + 2][4], str1[i + 2][5]);
    squares[i + 2].push(str1[i][6], str1[i][7], str1[i][8], str1[i + 1][6], str1[i + 1][7], str1[i + 1][8], str1[i + 2][6], str1[i + 2][7], str1[i + 2][8]);
  }
  return squares;
}

function solveS() {

  function finding() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return null;
  }

  function validating(number, position) {
    let item;
    const [i, j] = position;
    let rows = board;
    let columns = getColumns();
    let squares = getSquares();
    switch (i) {
      case 0:
      case 1:
      case 2:
        item = 0 + Math.floor(j / 3);
        break;
      case 3:
      case 4:
      case 5:
        item = 3 + Math.floor(j / 3);
        break;
      case 6:
      case 7:
      case 8:
        item = 6 + Math.floor(j / 3);
        break;
    }

    if (rows[i].includes(number) || columns[j].includes(number) || squares[item].includes(number)) {
      return false;
    }

    return true;
  }

  function solving() {
    const item = finding();
    if (item === null) {
      return true;
    }
    for (let i = 1; i <= 9; i++) {
      const itemNum = i.toString();
      const valid = validating(itemNum, item);

      if (valid === true) {
        const [q, w] = item;
        board[q][w] = itemNum;

        if (solving()) {
          return true;
        }
        board[q][w] = '-';
      }
    }
    return false;
  }

  solving();
  return board.join('').replaceAll(",", "");
}

function solveStep() {
  const tab = solveS();
  const findChanges = drawBoard();

  const asd = setInterval(function () {
    if (findChanges[int] !== tab[int]) {
      itemSudoku[int].innerHTML = tab[int];
      itemSudoku[int].style.backgroundColor = 'Gainsboro';
    }
    int++
    if (int > 80) {
      clearInterval(asd);
      int = 0;
    }
  }, 300)

}

drawButton.addEventListener('click', drawBoard);
solveButton.addEventListener('click', drawSolve);
refreshButton.addEventListener('click', refresh);
stepButton.addEventListener('click', solveStep);
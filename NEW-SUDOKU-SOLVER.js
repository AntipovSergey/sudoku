const boardStrings = ['1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--',
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
                      '---------------------------------------------------------------------------------'];

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function sudokuSolver(board) {
  let lines;
  
  if (typeof board === 'string') {
    if (Math.sqrt(Math.sqrt(board.length)) % 1 === 0) {
      lines = getLines(board);
    } else {
      return 'This is not sudoku!';
    }
  }

  if (Array.isArray(board)) {
    lines = JSON.parse(JSON.stringify(board));
    const chekSize = [];
    for (let i = 0; i < lines.length; i++) {
      chekSize.push(lines[i].length);
    }
    if (Math.min(...chekSize) !== Math.max(...chekSize) || Math.min(...chekSize) !== lines.length) {
      return 'This is not sudoku!';
    }
  }

  if (lines === undefined) {
    return 'This is not sudoku!';
  }

  const emptyCell = 0;
  const size = lines.length;
  lines = lines.map((el) => el.map((subEl) => typeof subEl === 'number' || /^\d+$/.test(subEl) ? Number(subEl) : emptyCell));
  const startLines = JSON.parse(JSON.stringify(lines));
  // console.table(lines); //////////////////////////////////////////////////////////////////////////////////////////////////

  if (!validSolution(lines, emptyCell)) {
    return 'This sudoku is unsolvable!';
  }

  solve();

  if (JSON.stringify(lines) === JSON.stringify(startLines)) {
    return 'This sudoku is unsolvable!';
  }

  // return lines; ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  console.table(lines) ////////////////////////////////////////////////////////////////////////////////////////////////////
  console.log('\nThis solution to String:'); //////////////////////////////////////////////////////////////////////////////
  return solvedSudokuToString(lines); /////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////
  ///  vvv  FUNCTIONS:  vvv  ///
  //////////////////////////////

  function getLines(str) {
    const linesSize = Math.sqrt(str.length);
    const arr = str.split('');
    const lines = [];
    for (let i = 0; i < linesSize; i++) {
      lines.push(arr.splice(0, linesSize));
    }
    return lines;
  }

  function getColumns(lines) {
    return lines[0].map((_, i) => lines.map((el) => el[i]));
  }

  function getCubes(lines) {
    const cubeSize = Math.sqrt(lines.length);
    const cubes = [];
    let linesLineNumber = 0;
    let linesColumnNumber = 0;
    for (let i = 0; i < cubeSize; i++) {
      cubes.push([]);
      for (let j = 0; j < cubeSize; j++) {
        cubes[i].push([]);
        for (let l = linesLineNumber; l < linesLineNumber + cubeSize; l++) {
          for (let c = linesColumnNumber; c < linesColumnNumber + cubeSize; c++) {
            cubes[i][j].push(lines[l][c]);
          }
        }
        linesColumnNumber += cubeSize;
      }
      linesLineNumber += cubeSize;
      linesColumnNumber = 0;
    }
    return cubes;
  }

  function validSolution(lines, emptyCell) {
    const columns = getColumns(lines);
    const cubes = getCubes(lines);

    const chekArr = (arr, exception = emptyCell) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && arr[i] !== exception) {
          return false;
        }
      }
      return true;
    }

    for (let i = 0; i < lines.length; i++) {
      if (!chekArr(lines[i])) return false;
    }

    for (let i = 0; i < columns.length; i++) {
      if (!chekArr(columns[i])) return false;
    }

    for (let i = 0; i < Math.sqrt(columns.length); i++) {
      for (let j = 0; j < Math.sqrt(columns.length); j++) {
        if (!chekArr(cubes[i][j])) return false;
      }
    }

    return true;
  }

  function findEmpty(lines, emptyCell) {
    for (let l = 0; l < size; l++) {
        for (let c = 0; c < size; c++) {
          if(lines[l][c] === emptyCell) {
            return [l, c];
          }
        }
    }
    return null;
  }

  function validateNum(num, pos, lines) {
    const chekElem = (arr, elem) => arr.includes(elem);
    
    const [currlineNumber, currColumnNumber] = pos;
    const columns = getColumns(lines);
    const cubes = getCubes(lines);

    if (chekElem(lines[currlineNumber], num)) return false;
    if (chekElem(columns[currColumnNumber], num)) return false;
    if (chekElem(cubes[Math.floor(currlineNumber / Math.sqrt(lines.length))][Math.floor(currColumnNumber / Math.sqrt(lines.length))], num)) return false;

    return true;
  }

  function solve() {
    const currPos = findEmpty(lines, emptyCell);

    if (currPos === null) return true;

    for (let num = 1; num <= size; num++) {
      if (validateNum(num, currPos, lines)) {
        const [l, c] = currPos;
        lines[l][c] = num;
        if(solve()) {
          return true;
        } else {
          lines[l][c] = emptyCell;
        }
      }
    }

    return false;
  }

  function solvedSudokuToString(lines) {
    return JSON.stringify(lines).match(/[1-9]/g).join('');
  }
};

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

for (let i = 0; i < boardStrings.length; i++) {
  console.log(`\nSudoku №${i + 1} >>> ${boardStrings[i]}\n\nSolution:`);
  console.log(sudokuSolver(boardStrings[i]), '\n');
}

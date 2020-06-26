const createBoard = require('./sudoku.js');
let variantsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
let inputSudokuPuzzle2 = '--8------49-157--2--3--419-185-6--2-----2--6-96-4-53---3--72--4-49-3--57827--9-13';
let boardArr = createBoard.createBoard(inputSudokuPuzzle2);

console.table(boardArr);

function checkSector(boardArr, stringIndex, cellIndex) {
  let sectorDiapason = {
    1: {
      stringStart: 0,
      stringEnd: 2,
      cellStart: 0,
      cellEnd: 2
    },
    2: {
      stringStart: 0,
      stringEnd: 2,
      cellStart: 3,
      cellEnd: 5
    },
    3: {
      stringStart: 0,
      stringEnd: 2,
      cellStart: 6,
      cellEnd: 8
    },
    4: {
      stringStart: 3,
      stringEnd: 5,
      cellStart: 0,
      cellEnd: 2
    },
    5: {
      stringStart: 3,
      stringEnd: 5,
      cellStart: 3,
      cellEnd: 5
    },
    6: {
      stringStart: 3,
      stringEnd: 5,
      cellStart: 6,
      cellEnd: 8
    },
    7: {
      stringStart: 6,
      stringEnd: 8,
      cellStart: 0,
      cellEnd: 2
    },
    8: {
      stringStart: 6,
      stringEnd: 8,
      cellStart: 3,
      cellEnd: 5
    },
    9: {
      stringStart: 6,
      stringEnd: 8,
      cellStart: 6,
      cellEnd: 8
    },
  };
  let sector = 0;
  if (stringIndex >= 0 && stringIndex <= 2 && cellIndex >= 0 && cellIndex <= 2) { // 1 sector
    sector = 1;
  }
  if (stringIndex >= 0 && stringIndex <= 2 && cellIndex >= 3 && cellIndex <= 5) { //2 sector
    sector = 2;
  }
  if (stringIndex >= 0 && stringIndex <= 2 && cellIndex >= 6 && cellIndex <= 8) { // 3 sector
    sector = 3;
  }
  if (stringIndex >= 3 && stringIndex <= 5 && cellIndex >= 0 && cellIndex <= 2) { // 4 sector
    sector = 4;
  }
  if (stringIndex >= 3 && stringIndex <= 5 && cellIndex >= 3 && cellIndex <= 5) { // 5 sector
    sector = 5;
  }
  if (stringIndex >= 3 && stringIndex <= 5 && cellIndex >= 6 && cellIndex <= 8) { // 6 sector
    sector = 6;
  }
  if (stringIndex >= 6 && stringIndex <= 8 && cellIndex >= 0 && cellIndex <= 2) { // 7 sector
    sector = 7;
  }
  if (stringIndex >= 6 && stringIndex <= 8 && cellIndex >= 3 && cellIndex <= 5) { // 8 sector
    sector = 8;
  }
  if (stringIndex >= 6 && stringIndex <= 8 && cellIndex >= 6 && cellIndex <= 8) { // 9 sector
    sector = 9;
  }

  let sectorArr = [];
  for(let sectorStringIndex = (sectorDiapason[sector].stringStart); sectorStringIndex <= sectorDiapason[sector].stringEnd; sectorStringIndex++) {
    for(let sectorCellIndex = (sectorDiapason[sector].cellStart); sectorCellIndex <= sectorDiapason[sector].cellEnd; sectorCellIndex++) {
      sectorArr.push(boardArr[sectorStringIndex][sectorCellIndex]);
    }
  }
  
  
  let intersection = variantsArr.filter(x => !sectorArr.includes(x));
  

  return intersection;
}

console.log(checkSector(boardArr, 8, 6));


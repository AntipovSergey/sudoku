function FuncCheckStr(boardArr, stringIndex) {
  let variantsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let intersection = boardArr[stringIndex];
  let intersectionStringResult = variantsArr.filter(x => !intersection.includes(x));
  return intersectionStringResult;
}

function FuncCheckColumn(boardArr, cellIndex) {
  let variantsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let colunArr = [];
  for (let stringIndex = 0; stringIndex < 9; stringIndex++) {
    colunArr.push(boardArr[stringIndex][cellIndex]);
  }
  let intersectionCellResult = variantsArr.filter(x => !colunArr.includes(x));
  
  return intersectionCellResult;
}

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

function FuncSudokuMerge (x,y){
  let intersectionStringResult = x.filter(x => y.includes(x));
  return intersectionStringResult;
}

function createBoard(str) { //принимает строку и преобразовывает в массив 9 строк и в каждой строке 9 элементов
  let stringToArr = str.split('');
  // console.log(stringToArr); 
  let newArr = [];
  for (let i = 0; i < 9; i++) {
    newArr.push(stringToArr.slice(i * 9, (i + 1) * 9));
  }
  return newArr;
}
let variantsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
let inputSudokuPuzzle = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let inputSudokuPuzzle2 = '--8------49-157--2--3--419-185-6--2-----2--6-96-4-53---3--72--4-49-3--57827--9-13';
let boardArr = createBoard(inputSudokuPuzzle2);
let sudoku = createBoard(inputSudokuPuzzle2);
// console.table(createBoard(inputSudokuPuzzle2));
console.table(sudoku);


for(let stringIndex = 0; stringIndex < 9; stringIndex++) {
  for(let cellIndex = 0; cellIndex < 9; cellIndex++) {
    if (sudoku[stringIndex][cellIndex] == '-') {
      // let sectorArr = checkSector(sudoku, stringIndex, cellIndex);
      // let stringArr = FuncCheckStr(sudoku, stringIndex);
      // let columnArr = FuncCheckColumn(sudoku, cellIndex);
      // let mergeResult = FuncSudokuMerge(sectorArr, stringArr, columnArr);
    }
  }
}








// let x = FuncCheckColumn(boardArr, 5);
// let y = FuncCheckStr(boardArr, 1);

// console.log(FuncSudokuMerge(x,y));
// console.log(FuncCheckColumn(boardArr, 5));
// console.log(FuncCheckStr(boardArr, 1));
//console.log(FuncSudokuMerge();




// console.table(createBoard(inputSudokuPuzzle2));





// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  // solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
  createBoard
}











//------
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// function solve(boardString) {

// }

// const {sudokuParse, data} = require('./runner.js');



// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let arrMain = [];
let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve(boardString) {
  // console.log(boardString);
  let arrBoard = boardString.split('');
  
  for (i = 0; i < 9 ; i++) {
    let arr = [];
    for (j = 0; j < 9; j++) {
      arr.push(arrBoard[j]);
    }
    arrMain.push(arr);
    arrBoard.splice(0, 9);

  }
  return arrMain;
}

solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// function isSolved(board) {

// }


function prettyBoard(board) {
  return (board.map(el => el.join('')).join('\n') )
}

console.log(prettyBoard(arrMain));
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }




//==============
//Поиск массива чисел из строки по координате
let arrRow = [];
function searchString(rowIndex) {
  arrRow.length = 0;
  
  let str = arrMain[rowIndex].join('');
  // console.log('arrString', str.match(/\d/g));
  arrRow = str.match(/\d/g);
  console.log('arrRow',arrRow);
  return arrRow;
}

// console.log((searchString(rowIndex)));

//Поиск массива чисел из колонки по координате
let arrColumn = [];
function searchColumn(columnIndex, arrMain) {
  arrColumn.length = 0;
  for (let i = 0; i < arrMain.length; i++  ) {
    if (arrMain[i][columnIndex] !== '-') {
      arrColumn.push(arrMain[i][columnIndex]);
    }
  }
  console.log(('arrColumn', arrColumn));
  return arrColumn;

}

// console.log((searchColumn(columnIndex, arrMain)));

//координата заполняемой ячейки
let rowIndex;
let columnIndex;

function xy() {
  for (let i = 0; i < arrMain.length; i++) {
    for (let j = 0; arrMain[i].length; j++) {
      if (arrMain[i][j] == '-') {
        // console.log('i',i,'j',j);
        // rowIndex = i;
        // columnIndex = j;

        searchString(i);
        searchColumn(j, arrMain);
        digitsToPaste();
        console.log('END');
        console.log('');
        
      } 
      // continue;
    }
  }
  console.log('hi');
  return
}

xy();


//исключение "лишних" цифр из массива для подстановки

function digitsToPaste () {
  let arrDigits = ['1','2','3','4','5','6','7','8','9'];
  console.log('arrDigits FIRST', arrDigits);

  for (let i = 0; i < arrDigits.length; i++) {
    // console.log(arrDigits.length);
    arrRow.map(el => {
      if (el == arrDigits[i]) {
        arrDigits.splice(i, 1);
        // console.log('arrD.length String', arrDigits.length, 'el', el, 'i', i);

      }
    })
  }
  console.log('arrDigits=> ', arrDigits);
  for (let j= 0; j < arrDigits.length; j++) {
    for(let k = 0; k < arrColumn.length; k ++){
      // console.log('arrColumn',arrColumn, 'условие' ,arrColumn[k] == arrDigits[j], 'el',arrColumn[k], 'digits', arrDigits);
      if (arrColumn[k] == arrDigits[j]) {
        // console.log(arrColumn[k], arrDigits[j]);
        // console.log('el',arrColumn[k], 'arrDigits',arrDigits);
        arrDigits.splice(j, 1);
        // console.log('arrD.length Column', arrDigits.length, 'el', arrColumn[k], 'j', j) ;
      }
    };
  }
  console.log('arrDigits',arrDigits);
  return arrDigits;
}



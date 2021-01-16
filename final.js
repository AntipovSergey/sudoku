// const {sudokuParse, data} = require('./runner.js');



// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let arrPrimary = [];
let arrMain = [];
let boardString = '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--';

function solve(boardString) {
  // console.log(boardString);
  let arrBoard = boardString.split('');

  for (i = 0; i < 9; i++) {
    let arr = [];
    for (j = 0; j < 9; j++) {
      arr.push(arrBoard[j]);
    }
    arrMain.push(arr);
    arrBoard.splice(0, 9);
    arrPrimary = Array.from(arrMain);
  }
  return arrMain;
}

solve(boardString);

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// function isSolved(board) {

// }


function prettyBoard(board) {
  return (board.map(el => el.join('')).join('\n'))
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
  console.log(`arrRow ${arrRow}`);
  return arrRow;
}

// console.log((searchString(rowIndex)));

//Поиск массива чисел из колонки по координате
let arrColumn = [];

function searchColumn(columnIndex, arrMain) {
  arrColumn.length = 0;
  for (let i = 0; i < arrMain.length; i++) {
    if (arrMain[i][columnIndex] !== '-') {
      arrColumn.push(arrMain[i][columnIndex]);
    }
  }
  console.log((`arrColumn ${arrColumn}`));
  return arrColumn;

}

// console.log((searchColumn(columnIndex, arrMain)));
let arrDigits = [];

function digitsToPaste() {
  console.log('arrDigits FIRST', arrDigits);
  arrDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // arrDigits.map((el, index) => {
  //   for (let i = 0; i < arrRow.length; i++) {
  //     if (el == arrRow[i]) {
  //       console.log(`index ${index}, i ${i}, arrRow.length ${arrRow.length}`);
  //       console.log(arrDigits.splice(index, 1));
  //       index--;

  //     }
  //   }

  //   for (let j = 0; i < arrColumn.length; i++) {
  //     if (el == arrColumn[j]) {
  //       console.log(arrDigits.splice(index, 1));
  //     }
  //   }
  // })

  for (let i = 0; i < arrDigits.length; i++) {
    arrRow.forEach((el, index) => {
      if (el == arrDigits[i]) {
        console.log(`index ${index}, i ${i}, arrRow[index] ${arrRow[index]}, before arrDigits ${arrDigits.join(' ')}`);
        arrDigits.splice(i, 1);
        console.log(arrDigits.length);
        console.log(`arrDigits ${arrDigits.join(' ')}`);
        // console.log('arrD.length String', arrDigits.length, 'el', el, 'i', i);
      }

      arrColumn.forEach((el, index) => {
        if (el == arrDigits[i]) {
          console.log(`index ${index}, i ${i}, arrColumn[index] ${arrColumn[index]}, before arrDigits ${arrDigits.join(' ')}`);
          arrDigits.splice(i, 1);
          console.log(arrDigits.length);
          console.log(`arrDigits ${arrDigits.join(' ')}`);
          // console.log('arrD.length String', arrDigits.length, 'el', el, 'i', i);
        }
      })
    })
  }
  // if (arrDigits.length == 0) {
  //   return 'нечего вставлять';
  // }

  console.log('arrDigits=> ', arrDigits);

  // for (let j = 0; i < arrDigits.length; j++) {

  // }

  return arrDigits;
}


//координата заполняемой ячейки

function xy() {
  for (let i = 0; i < arrMain.length; i++) {
    console.log(`главный массив строка ${i}`);
    for (let j = 0; j < arrMain[i].length; j++) {
      console.log(`главный массив строка ${i} колонка ${j}`);

      if (arrMain[i][j] == '-') {
        // console.log('i',i,'j',j);
        // rowIndex = i;
        // columnIndex = j;

        searchString(i);
        searchColumn(j, arrMain);
        digitsToPaste();
        console.log('END');
        console.log('');
        console.log(arrDigits[0]);
        if (arrDigits[0] == undefined) {
          return 'Не решается';
        }
        let rand = Math.random();
        let math = Math.round(rand * (arrDigits.length-1));
        let digitToChange = arrDigits[math];
        console.log(`
        длина массива arrDigits ${arrDigits.length},
        rand ${rand},
        случ число ${math},
        arrDigits[случ число] ${digitToChange}`);
        arrMain[i][j] = arrDigits[math];
        
        console.log(`arrMain[i][j] \n ${arrMain.join('\n ')}`);
      }
      // continue;
    }
  }
  console.log('hi');
  // console.log(arrMain);
  // arrMain[0][0] = arrDigits[0];
  console.log(`arrPrimary \n ${arrPrimary.join('\n ')}`);
  console.log(`arrMain[i][j] \n ${arrMain.join('\n ')}`);
  // return
}

xy();


//исключение "лишних" цифр из массива для подстановки

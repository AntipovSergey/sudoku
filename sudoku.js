//const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
// Takes a board as a string in the format 
// Принимает доску в виде строки в формате. 
// you see in the puzzle file. Returns
// который вы видите в файле головоломки. Возвращает
// something representing a board after
// ваш решатель попытался решить ее.
// your solver has tried to solve it.
// нечто, представляющее доску после того, как
// How you represent your board is up to you!/
// Как вы будете представлять свою доску, зависит от вас!

function check(arr) {

}

function solve(boardString) {

}


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
  solve,
  isSolved,
  prettyBoard,
};

// получаем массив со массивами строк (поле 9х9)
// function newArray(str){
//   let arr = [];
//   let str2 = str.split('');
//   while (str2.length > 0){
//     arr.push(str2.splice(0,9));
//   }
//   return arr;
// }
// let board = newArray(str)
// console.table(board);

//находим все координаты назаполненных ячеек
// function findEmpty(board){
//   let empty = [];
//   for (let i = 0; i < board.length; i++){
//     for(let j = 0; j < board[i].length; j++){
//       if(board[i][j] === '-'){
//         empty.push([i, j]);
//       }
//     }
//   }
//   return empty;
// }
// let emptyElement = findEmpty(board);
// console.table(emptyElement);

// function createColumn(arr) {
//   let n = arr.length
//   let columnArr = [];
//   for (let i = 0; i <  n; i++){
//     columnArr[i] = [];
//     for (let j = 0; j < n; j++){
//       columnArr[i][j] = arr[j][i];
//     }
//   }
// return columnArr;
// }

//console.table(arr)
//console.table(createColumn(arr))

/*******************************************Новый код*****/
const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
//const str = '--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3';
// const str = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9';
// const str = '-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-';
// const str = '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--';
// const str = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
// const str = '-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--';
// const str = '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7';
// const str = '----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----';
// const str = '3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--';
// const str = '3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-';
// const str = '-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-';
// const str = '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--';
// const str = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';
// const str = '---------------------------------------------------------------------------------';

// получаем массив со массивами строк (поле 9х9)
function newArray(str) {
  let arr = [];
  let str2 = str.split('');
  while (str2.length > 0) {
    arr.push(str2.splice(0, 9));
  }
  return arr;
}
let board = newArray(str)

let solveSudoku = function (board) {
  //задаем длину строки 
  const width = 9;

  //задаем размер бокса
  const box = 3;

  //находим все координаты назаполненных ячеек, возвращает массив где есть координаты строки и колонки
  const findEmpty = (board) => {
    for (let row = 0; row < width; row++) {
      for (let col = 0; col < width; col++) {
        if (board[row][col] === '-') {
          return [row, col];
        }
      }
    }
    // если заполнено все 
    return null
  }
  // проверка на то какое число можно подставить
  const validate = (number, position, board) => {
    const [row, col] = position;
    //check Rows 
    for (let i = 0; i < width; i++) {
      if (board[i][col] === number && i != row) {
        return false;
      }
    }

    //check Cols
    for (let i = 0; i < width; i++) {
      if (board[row][i] === number && i != col) {
        return false;
      }
    }
    // вычисляем позицию левого верхнего элемента в боксе 
    const boxRow = Math.floor(row / box) * box;
    const boxCol = Math.floor(col / box) * box;

    // проверка по сектору 3х3
    for (let i = boxRow; i < boxRow + box; i++) {
      for (let j = boxCol; j < boxCol + box; j++) {
        if (board[i][j] === number && i != row && j != col) {
          return false;
        }
      }
    }

    return true;
  }

  // рекурсивная функция 
  const solve = () => {
    const currPos = findEmpty(board);
    // если 
    if (currPos === null) {
      return true;
    }
    // перебор подходящих чисел для подстановки в незаполненные ячейки
    for (let i = 1; i < width + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);
      // если true
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        //запускаем рекурсию если все числа правильно подставились то все хорошо, если венет false и решение не получислось
        if (solve()) {
          return true;
        }

        board[x][y] = '-';

      }
    }
    return false;
  }

  solve();
  return board;
}

// console.table(board)
console.table(solveSudoku(board));

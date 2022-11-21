/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function getSquareElements(board, x, y) {
  const a = Math.floor(x / 3);
  const b = Math.floor(y / 3);
  const arr = [];
  for (let i = 3 * a; i < 3 * a + 3; i++) {
    for (let j = 3 * b; j < 3 * b + 3; j++) {
      arr.push(board[i][j]);
    }
  }
  return arr.filter(el => el !== '-');
}
function solve(boardString) {
  const arr = [];
  const arrColumns = [];
  for (let i = 0; i < 81; i = i + 9) {
    arr.push(boardString.slice(i, i + 9).split(''));
  }
  for (let i = 0; i < 9; i++) {
    const newColumn = [];
    for (let j = 0; j < 9; j++) {
      newColumn.push(arr[j][i]);
    }
    arrColumns.push(newColumn);
  }
  //i строка j столбец
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] === 'x') {
        const newArrI = arr[i].filter(el => el !== '-');
        const newArrJ = arrColumns[j].filter(el => el !== '-');
        const newSq = getSquareElements(arr, i, j);
        const arrUnique = [...new Set([...newArrI, ...newArrJ, ...newSq])];
        console.log(arrUnique);
      }
    }
  }

  const strPuz = '1x58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
  console.log(solve(strPuz));
}



  // return board;


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  let dict = {}
  let numArr  = board.split('')
  for (let i = 0; i < numArr.length; i++){
    if (numArr[i] === '-'){
      return false
    }
      if (!(+numArr[i] in dict)){
        dict[Number(numArr[i])] = 1
    }else{
      dict[Number(numArr[i])] += 1
    }
  }
  
  return Object.values(dict).every( el => el === 9)
}
console.log(isSolved('123456789123456789123456789123456789123456789123456789123456789123456789123456789'))
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

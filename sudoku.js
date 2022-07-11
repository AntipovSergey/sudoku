/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // eslint-disable-next-line max-len
  const cellMap = Array.from({ length: 9 }, (_, rowInd) => boardString.substring(rowInd * 9, (rowInd + 1) * 9));
  cellMap.forEach((row, rowInd) => {
    cellMap[rowInd] = row.split('').map((el) => Number(el) || '-');
  });

  // ! Your code here

  /**
   * return array with coord [rowInd, colInd] of all elements in the row with rowInd
   * @param {Number} rowInd
   */
  function getRow(rowInd) {
    return cellMap[rowInd];
  }
  /**
   * return array with coord [rowInd, colInd] of all elements in the col with colInd
   * @param {Number} colInd
   */
  function getCol(colInd) {
    return cellMap.map((_, rowInd) => cellMap[rowInd][colInd]);
  }
  /**
   * return array with coord [rowInd, colInd] of all elements in the square with rowInd, colInd
   * @param {Number} rowInd
   * @param {Number} colInd
   */
  function getSquare(_rowInd, _colInd) {
    const rowIndStart = Math.floor(_rowInd / 3) * 3;
    const colIndStart = Math.floor(_colInd / 3) * 3;
    const arrayToReturn = [];

    for (let rowInd = rowIndStart, rowCount = rowIndStart + 3; rowInd < rowCount; rowInd += 1) {
      for (let colInd = colIndStart, ColCount = colIndStart + 3; colInd < ColCount; colInd += 1) {
        arrayToReturn.push(cellMap[rowInd][colInd]);
      }
    }
    return arrayToReturn;
  }

  for (let index = 0; index < 9; index += 1) {
    console.log('~ getRow(index)', getRow(index));
    console.log('~ getCol(index)', getCol(index));
    console.log('~ getSquare(index, index)', getSquare(index, index));
  }
}

solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3');

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

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

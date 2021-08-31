function solve(boardString) {

  function solve(arrayOfStrings) {
    for (let row = 0; row < arrayOfStrings.length; row++) {
      for (let col = 0; col < arrayOfStrings.length; col++) {
        const cell = arrayOfStrings[row][col]; // любая ячейка

        if (cell === '-') {
          for (let numb = 1; numb <= 9; numb++) {
            if (check(arrayOfStrings, [row, col], numb)) { // Дашина функция, осуществляет проверку  и возвращает true или false
              // деструктуризация массива
              arrayOfStrings[row][col] = numb; // Присваиваем пустой ячейке вернувшееся от Даши значение numb
              if (solve(arrayOfStrings)) {
                return arrayOfStrings;

                // Базовое условие
              }
              // arrayOfStrings[row][col] = '-';
            }
            // else {
            //   return 'судоку не решаема'
            // }
          }
        }
      }

      // if (arrayOfStrings[i].includes('-') === false) {// беру от Даши?
      //    return //??? условие выхода
      // }

      // if (arrayOfStrings[i].includes('-') === true) {
      //   for (numb; numb<=9; numb++){
      //     arrayOfStrings[i].replace(`${emptyCell}`, `${numb + ''}`); // ??? Заменяю - на число
      //   }
      //    return solve(arrayOfStrings, numb )// numb???

      // return arrayOfIndexesOfEmptyCell
      // {arrayOfIndexesOfEmptyCell1, numb, arrayOfStrings}
    }
  }
}
  // console.log(solve([[1-58-2---][-9--764-5][2--4--819-19--73-6][762-83-9-][----61-5-][--76---3-][43--2-5-1][6--3-89--]]))

  // function solve(boardString) {
  // }

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
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}


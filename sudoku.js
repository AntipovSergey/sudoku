function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}


function isSolved() {  
  const boardRow = solve();
  for ( let i = 0; i < boardRow.lenght; i++) {
  
   if (boardRow[i].lenght !== new Set(boardRow[i])) {
    return false
   } return true 
  }

  const boardColumn = function rotate(source) {
    const res = source[0].map(() => [])
    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < source[0].length; j++) {
        res[j][source.length - 1 - i] = source[i][j]
      }
    }
  
    return res
  }


  for ( let i = 0; i < boardRow.lenght; i++) {
  
    if (boardRow[i].lenght !== new Set(boardRow[i])) {
    return false
   } return true
  }

  const checkSq = threeByThree
  for (let i = 0; i < checkSq.length; i++ ) {
    
  }
}

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  // Принимаю массив (solve), прохожусь по нему циклом. lastIndexOf/indexOf rayisaray
// console.log(new Set(a))

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

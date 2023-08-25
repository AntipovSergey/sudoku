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
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  
}

function prettyBoard() {
  const divider = '+-------+-------+-------+';
  let sudoku = `${divider}\n`;

  for (let i = 0; i < 9; i += 1) {
    let row = '| ';
    for (let j = 0; j < 9; j += 1) {
      if (j === 3 || j === 6) {
        row += '| ';
      }
      row += `${isSolved()[i][j]} `;
    }
    row += '|\n';
    sudoku += row;

    if (i === 2 || i === 5) {
      sudoku += `${divider}\n`;
    }
  }
  sudoku += divider;
  return sudoku;
}

module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard,
};


const fs = require("fs");



function read(num = 0 || 0) {
 
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */

  const readText = fs.readFileSync("./puzzles.txt", "utf8").trim().split("\n");
  
  const formText = readText[process.argv[2] || 0].split("");

  const desk = [];

  for (let i = 0; i < 9; i++) {
    desk.push(formText.splice(0, 9));
  }
  // console.table(desk);
  return desk;
}



// console.log(read());



function solve(desk) {
  
  // console.table(desk)
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (desk[x][y] == "-") {
        for (let num = 1; num <= 9; num++) {
          if (isSolved(desk, x, y, num)) {
            desk[x][y] = num.toString();
            console.table(desk);
            if (solve(desk)) {
              return desk;
            }
            desk[x][y] = "-";
          }
        }
        return false;
      }
    }
  }
  // console.log(desk);
  return desk;
}

function isSolved(desk, row, col, num) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  num = num.toString();

  for (let i = 0; i < desk.length; i++) {
    if (desk[row][i] === num || desk[i][col] === num) {
      return false;
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let z = startRow; z < startRow + 3; z++) {
      for (let w = startCol; w < startCol + 3; w++) {
        if (desk[z][w] === num) {
          return false;
        }
      }
    }
  }

  return true;
}
console.log(solve(read()));

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

// solve(read());

// function abc(desk) {
//   if (solve(desk)) {
//     return true;
//   }
//   return "АААААААААААААААААААААААААААААААААААААААААААААААААААААААААА!";
// }
// let desk = read(7);
// console.log(abc(read()));

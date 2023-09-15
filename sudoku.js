const fs = require("fs");
function read(num) {
  const file = fs.readFileSync("./puzzles.txt", "utf-8").split("\n")
  .map((el) => el.split(''))
  .map((arr) => arr.map((el) => el === '-'? 0 : Number(el) ))
  // const sud = [];
  // for (let i = 0; i < 15; i++) {
  //   for (let i = 0; i < file.length; i += 9) {
  //     sud.push(file.slice(i, i + 9));
  //   }
  // }
  // const board = [];
  // for (let i = 0; i < 15; i += 1) {
  //   board.push(sud.splice(0, 9));
  // }
  // return board.map((sudoku) => sudoku.map((row) => row.split("")));
const newArr = []
  for(let i = 0; i < 9; i++) {
    newArr.push(file[num].splice(0,9))
  }
  return newArr;

}
const board = read(0)
console.table(board);



function findEmpty(board) {
  // const line = 9;
  // const side = 3;
  // const gameField = read()

      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 3; c++) {
          if (board[r][c] === 0) {
            return [r,c]
          }
        }
      }
      return null;

    }

    const empty = findEmpty(board)  
    if(!empty){
      return true
    }

    const [row, col] = empty;

    

    console.log(empty);

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
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

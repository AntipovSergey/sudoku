const fn = require ("fs")
function read() {
  let sss = fn.readFileSync ("./puzzles.txt","utf-8").split("\n");
 console.log(sss)
}
read()
function solve() {
  function findMissingNumbers(numbers) {
    let missingNumbers = [];
    let counter = 1;

    for (let i = 0; i < numbers.length; i++) {
        while (Number(numbers[i]) !== counter) {
            missingNumbers.push(counter);
            counter++;
        }
        counter++;
    }

    return missingNumbers;
}

let inputNumbers = ["1", "2", "4", "9"];
let result = findMissingNumbers(inputNumbers);
console.log(result);
     
   }
 }
 console.log(checkNumbers("1-58-2--9"));


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

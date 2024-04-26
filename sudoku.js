let arr = [
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--",
];


function read(array) {
  const replaceOnZero  = array.join("").replaceAll("-", "0").split("");
  const numbersInArray = replaceOnZero.map((a) => +a);
  let sudokuTable = [];
  const numbersInArrayLength = numbersInArray.length;
  for (let i = 0; i < numbersInArrayLength; i+=9) {
    const numbersInArrayCopy = [...numbersInArray];
    sudokuTable.push(numbersInArrayCopy.splice(i, 9));
  }
  return sudokuTable;
}

console.table(read(arr));

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

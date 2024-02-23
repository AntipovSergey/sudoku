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
  const arr = read();
  for (let i = 0; i < arr.length; i++) {
    let x = []; // нахожу квадрат с наименьшем количеством пустых ячеек
    if ('-' in arr[i] < arr[i + 1] ) {
      x = arr[i];
    } ololo
  }
  
  // найти числа которых нет в этом квадрате

  /** беру пустую ячейку и относительно её проверяю столбец
   и строку на наличие в них числа которое мы хотим вставить в эту ячейку ) **/ 

  // берем первую пустую ячейку в этом квадрате и пытаемся туда установить первое число из найденных
  // делаем проверку по строке и столбцу всей судоки относительно его положения 
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
  const sudokuVue = read().join('\n').replace(/,/g, ' ');
  return sudokuVue;
}

module.exports = { read, solve, isSolved, prettyBoard };
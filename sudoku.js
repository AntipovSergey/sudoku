function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function findEmptySpot(sudoku) {
for (let i = 0; i < sudoku.length; i += 1) {
  for (let j = 0; j < sudoku.length; j += 1) {
    if (sudoku[i][j] === 0) {
      const row = i;
      const col = j;
      return [row, col]
    }
  }
}
return null; // Возвращаем null, если нет пустых ячеек
    }


function checkRow(sudoku, row, num) {
  if (sudoku[row].includes(num)) return true;
  return false;
}
``
function checkCol(sudoku, col, num) {
  const checkedCol = [];
  for (let i = 0; i < sudoku.length; i += 1) {
    checkedCol.push(sudoku[i][col]);
    if (checkedCol.includes(num)) return true;
    return false;
  }
}

function chechBox(sudoku, row, col, num)
{const startRow = Math.floor(row / 3) * 3;
const startCol = Math.floor(col / 3) * 3;
for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
        if (sudoku[i][j] === num) {
            return false;
        }
    }
}
}

function solve(sudoku) {

// read(num);

  const emptySpot = findEmptySpot(sudoku);
  if (!emptySpot) {return true}; // судоку решено
      const [row, col] = emptySpot;
      
        // проверяем пустую ячейку 
        const n = 9;
        for (let i = 1; i <= n; i += 1) {
        if (!checkRow(sudoku, row, i)
            && !checkCol(sudoku, col, i)
            && !chechBox(sudoku, row, col, i)) {
            sudoku[row][col] = i;

            // Пытаемся решить судоку для следующей пустой ячейки
            if (solve(sudoku)) {
                // Если судоку решено, завершаем цикл и возвращаем true
                return true;
            }

            // Если судоку не решено, отменяем заполнение и пытаемся следующее значение
            sudoku[row][col] = 0;
        }
        return false // если не найдено подходящее число
      }
    }
    
  

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */


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



const sudoku = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
console.table(solve(sudoku));

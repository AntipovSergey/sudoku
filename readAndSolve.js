// Подключить функции из файла sudoku.js.




function readAndSolve(files) {
  const fileData = fs.readFileSync(files, 'utf-8').slice(0, 81);
  const sudokuArray = [];
  
  for (let i = 0; i < fileData.length; i += 9) {
    sudokuArray.push(fileData.slice(i, i + 9).split(''));
  }
  
  console.table(sudokuArray);
}

console.log(readAndSolve(fileData));

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const fileStr = readAndSolve();

  const puzzles = fileStr
    .split('\n')
    .filter((line) => line !== '');
    
// console.log(puzzles);

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = Number(process.argv[2]) || 1;
  

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = puzzles[puzzleNumber - 1];
  console.log(`Решаем судоку №${puzzleNumber}:`);
  console.log(puzzle, '\n');

  // Использовать функцию solve из файла sudoku.js для решения судоку.
  const solvedPuzzle = sudoku.solve(puzzle);

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (!sudoku.isSolved(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(`Судоку №${puzzleNumber} решён успешно!`);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  console.log(sudoku.prettyBoard(solvedPuzzle), '\n');


module.exports = readAndSolve;

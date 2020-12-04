// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let sudoku = prettyBoard(boardString);
  //преобразование в двумерный массив
  console.log(sudoku.map((el) => el.join(' ')).join('\n'));
  //Перебираем судоку по элементам и если элемент == 0, делаем check. функция check возвращает одно значение, тогда меняет элемент судоку
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] == 0) {
        const row = sudoku[i];
        const col = sudoku.map((el) => el[j]);
        const square = getSquare(i, j);
        const arr = Array.from(new Set([...row, ...col, ...square]));
        const num = check(arr);
        if (num) {
          sudoku[i][j] = num;
        }
      }
    }
  }

  //функция проверки, каких элементов нет в строке, столбце и квадрате. возвращает элемент, если он один, иначе 0
  function check(arr2) {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const cand = [];
    arr.forEach((el) => {
      if (!arr2.includes(el)) {
        cand.push(el);
      }
    });
    console.log(cand);
    if (cand.length == 1) {
      return cand[0];
    } else {
      return 0;
    }
  }

  //функция получения элементов из квадрата по координатам элемента
  function getSquare(i, j) {
    function getCords(a) {
      const start = Math.floor(a / 3) * 3;
      const finish = start + 2;
      return {
        start,
        finish,
      };
    }
    //координаты
    const cordsI = getCords(i);
    const cordsJ = getCords(j);

    const squareSearch = [];
    for (k = cordsI.start; k <= cordsI.finish; k++) {
      for (r = cordsJ.start; r <= cordsJ.finish; r++) {
        squareSearch.push(sudoku[k][r]);
      }
    }
    return squareSearch;
  }
  console.log('\n');
  console.log(sudoku.map((el) => el.join(' ')).join('\n'));
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(str) {}

function prettyBoard(str) {
  let newstr1 = str.replace(/\D/g, '0');
  let newStr = newstr1.split('');
  let sudoku = [];
  for (let i = 0; i < newStr.length; i++) {
    sudoku.push(newStr.splice(0, 9));
  }
  return sudoku;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};


// тестовая строка с данными судоку
const line =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

// 1-5 8-2 ---
// -9- -76 4-5
// 2-- 4-- 819
// -19 --7 3-6
// 762 -83 -9-
// --- -61 -5-
// --7 6-- -3-
// 43- -2- 5-1
// 6-- 3-8 9--

// создаем массив массивов и помещаем его в переменную table
function makeTable(boardString) { 
  const table = [];
  const splittedLine = line.split('');
  for(let elem of splittedLine) {
    console.log('elem', elem)
    if (elem === '-') elem = 0;
  };
  console.log('splittedLine', splittedLine);
  for (let i = 0; i < 9; i++) {
    const array = [];
    for (let j = 0; j < 9; j++) {
      array.push(Number(splittedLine.shift()));

      // if (splittedLine[i] === '-' || splittedLine[j] === '-') splittedLine[j][i] = 0;
    }
    table.push(array);
  }
  return table;
}

const table = makeTable(line);
console.log('table', table);

// создаем функцию чтобы найти row и column пустого элемента
function isEmpty(table, row, column) {
  let done = false;
  const res = [-1, -1];
  while (!done) {
    if (row == 9) {
      done = true;
    } else if (table[row][column] === '-') {
      res[0] = row;
      res[1] = column;
      done = true;
    } else if (column < 8) {
      column++;
    } else {
      row++;
      column = 0;
    }
  }
  return res;

  // for (let i = 0; i < table.length; i++) {
  //   for (let j = 0; j < table[i].length; j++) {
  //     if (table[i][j] === '-') {
  //       return [i,j];
  //     }
  //   }
  // }
  // return 'solved';
}

// создаем функцию, которая проверяет всё
function allCheck(table, row, column, num) {
  return rowCheck(table, row, num) && columnCheck(table, column, num) && boxCheck(table, row, column, num);
}
function rowCheck(table, row, num) {
  for (let column = 0; column < 9; column++) {
    if (table[row][column] === num)
        return false;
  }
        return true;
}
function columnCheck(table, column, num) {
  for (let row = 0; row < 9; row++) {
    if (table[row][column] === num)
        return false;
  }
        return true;
}
function boxCheck(table, row, column, num) {
  row = Math.floor(row / 3) * 3;
  column = Math.floor(column / 3) * 3;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (table[row + r][column + c] === num)
          return false;
    }
          return true;
  }
}

function solve(table, row = 0, column = 1) {
  const step = isEmpty(table, row, column);
  row = step[0];
  column = step[1];

  if (row === -1) {
    // console.log(table);
    return true;
  }

  for (let num = 1; num <=9; num++) {
    if (allCheck(table, row, column, num)) {
      // console.log('allCheck', allCheck(table, row, column, num))
      table[row][column] = num.toString();
      if (solve(table, row, column)) {
        return 'solved';
      }
      table[row][column] = '-';
    }
  }
  return false;
}

console.log(solve(table));
// const [i, j] = isEmpty(board);

// console.log(i);
// console.log(j);

// console.log(solve(line));




// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) { }

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) { }

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};



//1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--
const example = [
  {1: "yes", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "yes", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "yes", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "yes", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "yes"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "yes", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "yes", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "yes", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "yes", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "yes", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "yes", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "yes", 9: "no"},
  {1: "yes", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "yes"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "yes", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "yes"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "yes", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "yes", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "yes", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "yes", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "yes", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "yes", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "yes", 9: "no"},
  {1: "no", 2: "no", 3: "yes", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "yes"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "yes", 7: "no", 8: "no", 9: "no"},
  {1: "yes", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "yes", 2: "no", 3: "no", 4: "no", 5: "yes", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "yes", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "yes", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "yes", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "yes", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "yes", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "yes", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "yes", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "yes", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "yes", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "yes", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "yes", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "yes"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
]

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
}

/**
 * Принимает массив из 9 объектов и возвращает заполненный массив
 * 
 */

function fillArr(arr) {
  let values;
  let result = [];
  let temp = [];
  let counter = 0;
  for(let i = 0; i < arr.length; i += 1) {
    values = Object.values(arr[i]);
    for(let j = 0; j < values.length; j += 1) {
      if(values[j] === 'yes') {
        result.push(j + 1);
      }
    }
  }
  if (result.length !== 0) {
    for(let i = 0; i < result.length; i += 1) {
      for(let j = 0; j < arr.length; j += 1) {
        if(arr[j][result[i]] === "maybe") {
          arr[j][result[i]] = "no";
        }
      }
    }
  }
  for(i = 0; i < arr.length; i += 1) {
    temp = Object.entries(arr[i]);
    counter = 0;
    for(let j = 0; j < temp.length; j += 1) {
      if (temp[j][1] === "no") {
        counter += 1;
      }
    }
    if(counter === 8) {
      for(let z = 1; z < 10; z += 1) {
        if(arr[i][z] === "maybe") {
          console.log({z});
          arr[i][z] = "yes";
        }
      }
    }
  }
  return arr;
}

function getRows(arr) {
  let result = [];
  let row = [];
  for(let i = 0; i < arr.length; i += 1) {
    row.push(arr[i]);
    if((i + 1) % 9 === 0) {
      result.push(row);
      row = [];
    }
  }
  return result;
}

function getColumns(arr) {
  let result = [];
  const rows = arr.length;
  const cols = arr[0].length;
  for(let i = 0; i < cols; i += 1) {
  result[i] = [];
    for(let j = 0; j < rows; j += 1) {
      result[i][j] = arr[j][i];
    }
  }
  return result;
}

function getSegments(arr) {
  let result = [];
  let seg1= [];
  let seg2 = [];
  let seg3 = [];
  for(let i = 0; i < arr.length; i += 1) {
    for(let j = 0; j < 3; j += 1) {
      seg1.push(arr[i][j]);
    }
    if((i + 1) % 3 === 0) {
      result.push(seg1);
      seg1 = [];
    }
    for(let j = 3; j < 6; j += 1) {
      seg2.push(arr[i][j]);
    }
    if((i + 1) % 3 === 0) {
      result.push(seg2);
      seg2 = [];
    }
    for(let j = 6; j < 9; j += 1) {
      seg3.push(arr[i][j]);
    }
    if((i + 1) % 3 === 0) {
      result.push(seg3);
      seg3 = [];
    }
  }
  return result;
}

// const arr = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ]

// getSegments(arr);

const part = [
  {1: "yes", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "yes", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "yes", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "yes", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "no", 8: "no", 9: "yes"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "no", 7: "yes", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "no", 6: "yes", 7: "no", 8: "no", 9: "no"},
  {1: "no", 2: "no", 3: "no", 4: "yes", 5: "no", 6: "no", 7: "no", 8: "no", 9: "no"},
  {1: "maybe", 2: "maybe", 3: "maybe", 4: "maybe", 5: "maybe", 6: "maybe", 7: "maybe", 8: "maybe", 9: "maybe"},
  {1: "no", 2: "no", 3: "no", 4: "no", 5: "yes", 6: "no", 7: "no", 8: "no", 9: "no"},
]
/**
 * Принимает массив объектов и отправляет группы по 9 в функцию fillArr
 * 
 */

function checkArr(arr) {
  const rows = getRows(arr);
  for (let i = 0; i < rows.length; i += 1) {
    rows[i] = fillArr(rows[i]);
  }
  const columns = getColumns(rows);
  for (let i = 0; i < columns.length; i += 1) {
    columns[i] = fillArr(columns[i]);
  }
  const segments = getSegments(columns);
  for (let i = 0; i < segments.length; i += 1) {
    segments[i] = fillArr(segments[i]);
  }
  if(!isSolved(arr)) {
    checkArr(arr);
  }
  console.log(arr[1]);
  // if (isSolved(arr)) {
  // }
}

checkArr(example);
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

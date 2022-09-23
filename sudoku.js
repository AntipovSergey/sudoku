/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(board) {
  checkArr(board);
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

/**
 * Принимает массив объектов и отправляет группы по 9 в функцию fillArr
 * 
 */

function checkArr(arr) {
  const rows = getRows(arr);
  const columns = getColumns(rows);
  const segments = getSegments(columns);
  let counter = 0;
  while(counter < 81 && !isSolved(arr)) {
    for (let i = 0; i < rows.length; i += 1) {
      rows[i] = fillArr(rows[i]);
    }
    for (let i = 0; i < columns.length; i += 1) {
      columns[i] = fillArr(columns[i]);
    }
    for (let i = 0; i < segments.length; i += 1) {
      segments[i] = fillArr(segments[i]);
    }
    counter += 1;
  }
  if(!isSolved(arr)) {
    console.log("Я не могу справиться с задачей")
  } else {
    prettyBoard(arr);
  }
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const arrTemp = [];
  for(let i = 0; i < board.length; i += 1) {
    for (const [key, value] of Object.entries(board[i])) {
      if (value === 'yes') {
        arrTemp.push(board[i]);
      }
    }
  }
  if(arrTemp.length === board.length) {
    return true;
  } else {
    return false;
  }
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let finalArr = [];
  for(let i = 0; i < board.length; i += 1) {
    for (const [key, value] of Object.entries(board[i])) {
      if (value === 'yes') {
        finalArr.push(key);
        break;
      }
    }
  }
  finalArr = getRows(finalArr);
  finalArr = finalArr.map(el => el.join(" ")).join(`\n`);
  console.log(finalArr);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

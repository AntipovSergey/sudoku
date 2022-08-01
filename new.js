//Делаем массив и строки судоку
const text =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

function arr(str) {
  return str
    .replace(/(.{9})/g, (match, n) => `${n}\n`)
    .split("\n")
    .filter((line) => line !== "")
    .map((el) => el.split(""));
}

const strArray = arr(text);

// Делаем массив цифр
function numArray(str) {
  const b = [];
  for (let i = 0; i < str.length; i++) {
    const a = [];
    for (let j = 0; j < str.length; j++) {
      if (str[i][j] !== "-") {
        a.push(Number(str[i][j]));
      } else {
        a.push(str[i][j]);
      }
    }
    b.push(a);
  }
  return b;
}

const array = numArray(strArray);
console.table(array);

//Транспонируем массив.Убираем '-'.
function tMatrix(matrix) {
  const b = [];
  for (let i = 0; i < matrix.length; i++) {
    const a = [];
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== "-") {
        a.push(matrix[j][i]);
      }
    }
    b.push(a);
  }
  return b;
}

const col = tMatrix(array);
console.table(col);

//Принимает i элемент массива(судоку), тоже массив(i-я горизонталь судоку). Проверяет на наличие цифры
//подставляет рандомное число
function solve(arrStr) {
  const arr = [];
  const ran = Math.ceil(Math.random() * 9);

  arrStr.forEach((element, i) => {
    if (element === "-" && !arrStr.includes(ran) && !arr.includes(ran)) {
      arr.push(ran);
    } else {
      arr.push(element);
    }
  });

  return arr;
}

console.log(solve(array[0]));

//Принимает ф-ю solve и с помощью рекурсии, аполняет i-я горизонталь судоку
function full(f) {
  if (f.includes("-")) {
    return full(solve(f));
  } else {
    return f;
  }
}

console.log(full(array[0]));

//Заполняет всё судоку с помощью ф-ции full(f)
const res = [];
array.forEach((el) => {
  res.push(full(el));
});

console.table(res);

// Проверяет на совпадения столбцов.
function isSolved(board) {
  const solveForColumn = tMatrix(board);
  const mainUniq = [];

  solveForColumn.forEach((el, k) => {
    const uniq = [];
    el.forEach((e, i) => {
      for (let j = 0; j < i; j++) {
        if (solveForColumn[k][j] === solveForColumn[k][i]) {
          uniq.push(solveForColumn[k][i]);
        }
      }
    });
    mainUniq.push(uniq);
  });

  return mainUniq;
}

console.log(isSolved(res));

/*function isSolved(board) {
  const solveForColumn = tMatrix(board);
  const mainUniq = [];
  for (let k = 0; k < solveForColumn.length; k++) {
    const uniq = [];
    for (let i = 0; i < solveForColumn[k].length; i++) {
      for (let j = 0; j < i; j++)
        if (solveForColumn[k][j] === solveForColumn[k][i]) {
          uniq.push(solveForColumn[k][i]);
        }
    }
    mainUniq.push(uniq);
  }
  return mainUniq;
}*/

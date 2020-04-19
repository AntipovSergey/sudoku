/* eslint-disable prefer-destructuring */
/* eslint-disable node/no-unsupported-features/node-builtins */
const op1 = require('./poolCheck');
const op2 = require('./solveCheck');

const string1 =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

let pool = [];
let raws = [];
let log = [];

const splited = [...string1.split('')];

for (let i = 0; i < 81; i += 9) {
  raws.push(splited.slice(i, i + 9));
}

log.push([raws.slice(), [], 0, 0]);
let nextH = 0;
let nextV = 0;

function rawsToString(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i].join('');
  }
  return str;
}

function loadState() {
  raws = log[log.length - 1][0].slice();
  pool = log[log.length - 1][1].slice();
  pool.pop();
  if (pool.length === 0) {
    log.pop();
    raws = log[log.length - 1][0].slice();
    pool = log[log.length - 1][1].slice();
    pool.pop();
    choice(
      log[log.length - 1][0],
      log[log.length - 1][2],
      log[log.length - 1][3],
    );
  }
  choice(
    log[log.length - 1][0],
    log[log.length - 1][2],
    log[log.length - 1][3],
  );
}

function choice(arr, coordV, coordH) {
  raws = arr.slice();
  if (coordH === 8 && coordV < 8) {
    nextH = 0;
    nextV = coordV + 1;
  } else if (coordH < 8) {
    nextH = coordH + 1;
    nextV = coordV;
  }

  // Проверка на наличие цифры в ячейке
  if (raws[coordV][coordH] !== '-' && coordV < 8 && coordH < 8) {
    console.log(raws[coordV][coordH], nextV, nextH, 'next');
    choice(raws, nextV, nextH);
  } else if (coordV === 8 && coordH === 8 && raws[coordV][coordH] !== '-') {
    console.table(raws);
    return raws;
  }

  // Переменные для хранения содержимого строки, столбца и квадрата, соответствующих текущей ячейке
  const horiz = raws[coordV].join('');
  let vert = '';
  let sqr = '';

  for (let j = 0; j < 9; j++) {
    vert += `${raws[j][coordH]}`;
  }

  // Определение левой верхней ячейки текущего квадрата
  let sqrH;
  let sqrV;

  if (coordH / 3 < 1) {
    sqrH = 0;
  }
  if (coordH / 3 >= 1 && coordH / 3 < 2) {
    sqrH = 3;
  }
  if (coordH / 3 >= 2) {
    sqrH = 6;
  }
  if (coordV / 3 < 1) {
    sqrV = 0;
  }
  if (coordV / 3 >= 1 && coordV / 3 < 2) {
    sqrV = 3;
  }
  if (coordV / 3 >= 2) {
    sqrV = 6;
  }

  // Получение строки из значений текущего квадрата
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      sqr += `${raws[sqrV + j][sqrH + i]}`;
    }
  }

  // Получение пула свободных чисел
  if (pool.length === 0) {
    pool = op1.poolCheck(horiz, vert, sqr).split('');
    console.log(pool.join(''));
  }

  if (pool.length === 1 && pool[0] !== -1) {
    raws[coordV][coordH] = pool[0];
    pool = [];
  } else if (pool.length > 1) {
    log.push([raws.slice(), pool.slice(), coordV, coordH]);
    raws[coordV][coordH] = pool[pool.length - 1];
    pool = [];
  } else if (pool === -1) {
    loadState();
  }

  // // Проверки правильности заполнения ряда, столбца или квадрата
  // if (coordH === 8) {
  //   if (!op2.solveCheck(rawsToString(raws), 0, coordV, 'h')) {
  //     loadState();
  //   }
  // }
  // if (coordV === 8) {
  //   if (!op2.solveCheck(rawsToString(raws), coordH, 0, 'v')) {
  //     loadState();
  //   }
  // }
  // if (
  //   (coordH === 2 && coordV === 2) ||
  //   (coordH === 5 && coordV === 2) ||
  //   (coordH === 2 && coordV === 5) ||
  //   (coordH === 5 && coordV === 5)
  // ) {
  //   if (!op2.solveCheck(rawsToString(raws), sqrH, sqrV, 's')) {
  //     loadState();
  //   }
  // }

  if (coordV === 8 && coordH === 8) {
    console.table(raws);
    return raws;
  }

  choice(raws, nextV, nextH);
  return raws;
}

console.table(raws);
choice(raws, 0, 0);

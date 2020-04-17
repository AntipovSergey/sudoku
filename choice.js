/* eslint-disable prefer-destructuring */
/* eslint-disable node/no-unsupported-features/node-builtins */

const string1 =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const splited = [...string1.split('')];
let raws = [];

for (let i = 0; i < 81; i += 9) {
  raws.push(splited.slice(i, i + 9));
}

let log = [];
let nextH = 0;
let nextV = 0;

function choice(coordH, coordV) {
  if (nextH < 8) {
    nextH += 1;
  }
  if (nextH === 8) {
    nextH = 0;
    nextV += 1;
  }
  if (raws[coordH][coordV] !== '-') {
    choice(nextH, nextV);
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

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      sqr += `${raws[sqrV + j][sqrH + i]}`;
    }
  }

  // Получение пула свободных чисел
  const pool = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // poolCheck(horiz, vert, sqr).split('');
  if (pool.length > 1) {
    log.push([raws.slice(''), pool, coordH, coordV]);
    raws[coordH][coordV] = pool[-1];
    if (coordH === 8 && coordV === 8) {
      console.table(raws);
      return raws;
    }
    choice(nextH, nextV);
  }
  if (pool === -1) {
    raws = [];
    raws.push(log[-1].slice(''));
    pool.pop();
    choice(log[-1][2], log[-1][3]);
  }
  if (pool.length === 1) {
    raws[coordH][coordV] = pool[0];
    if (coordH === 8 && coordV === 8) {
      console.table(raws);
      return raws;
    }
    choice(nextH, nextV);
  }

  // console.log(log[0]);
}

console.table(raws);
choice(0, 0);

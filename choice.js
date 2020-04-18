/* eslint-disable prefer-destructuring */
/* eslint-disable node/no-unsupported-features/node-builtins */

const string1 =
  '---------------------------------------------------------------------------------';

let pool = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const splited = [...string1.split('')];
let raws = [];

for (let i = 0; i < 81; i += 9) {
  raws.push(splited.slice(i, i + 9));
}

let log = [[raws].slice(), [pool].slice(), 0, 0];
let nextH = 0;
let nextV = 0;

function choice(coordV, coordH) {
  if (nextH === 8) {
    nextH = 0;
    nextV += 1;
  }
  if (nextH < 8) {
    nextH += 1;
  }
  if (raws[coordV][coordH] !== '-') {
    choice(nextV, nextH);
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
  // poolCheck(horiz, vert, sqr).split('');

  if (pool.length === 1) {
    raws[coordV][coordH] = pool[0];
    pool = [];
    pool = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  }
  if (pool.length > 1) {
    log.push([raws.slice(), pool.slice(), coordV, coordH]);
    raws[coordV][coordH] = pool[pool.length - 1];
  }
  if (pool === -1) {
    raws = [];
    raws.push(log[log.length - 1][0].slice());
    pool = [];
    pool.push(log[log.length - 1][1].slice());
    pool.pop();
    if (pool.length === 0) {
      log.pop();
      raws = [];
      raws.push(log[log.length - 1][0].slice());
      pool = [];
      pool.push(log[log.length - 1][1].slice());
      pool.pop();
      choice(log[log.length - 1][2], log[log.length - 1][3]);
    }
    choice(log[log.length - 1][2], log[log.length - 1][3]);
  }
  if (coordV === 8 && coordH === 8) {
    console.table(raws);
    return raws;
  }
  choice(nextV, nextH);
}

console.table(raws);
choice(0, 0);

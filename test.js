function solve(boardString) {
  let newArr = [];
  let arr = boardString.split('');
  for (let i = 0; i < boardString.length; i += 9) {
    newArr.push(arr.slice(i, i + 9));
  }
  return newArr;
}

let test = solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1, 10));
console.log(getRandomInt(1, 10));
console.table(test);
let arr = [];

function gor(test) {
  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < test[i].length; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test;
}
// console.table(gor(test));

function cube1(test) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube1(test));

function cube2(test) {
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube2(test));

function cube3(test) {
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube3(test));

function cube4(test) {
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube4(test));

function cube5(test) {
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube5(test));


function cube6(test) {
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube6(test));

function cube7(test) {
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube7(test));

function cube8(test) {
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube8(test));

function cube9(test) {
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      if (test[i][j] === '-') {
        test[i][j] = getRandomInt(1, 9);
      }
    }
  }
  return test
}
// console.table(cube9(test));

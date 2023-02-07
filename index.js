let board = [
  [1, 2, "-", 4, 5, 6, "-", 8, 9],
  [1, 2, "-", 4, 5, 6, "-", 8, 9],
  [1, 2, 3, 4, "-", 6, 7, 8, 9],
  [1, "-", 3, 4, 5, "-", 7, 8, 9],
  [1, 2, "-", 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, "-", 6, 7, 8, 9],
  [1, 2, "-", 4, 5, 6, 7, 8, 9],
  ["-", 2, 3, 4, "-", 6, 7, 8, 9],
  [1, 2, 3, "-", 5, 6, "-", 8, 9],
];

// Цикл по строке ---> Находится пустое место ---> Пустое место сравнивается с имеющимися цифрами и ставится уникальное

let arr = [2, 4, "-", 1, 6, "-", 9, 8, 3];
let pool = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "-") {
    for (let j = 0; j < pool.length; j++) {
      if (!arr.includes(pool[j])) {
        arr[i] = pool[j];
        break;
      }
    }
  }
}
// console.log(arr);

let arr2 = [
  ["-", 4, 3, 2],
  [4, "-", 2, 1],
  [1, "-", "-", 4],
  [1, "-", "-", 4],
];

// forEach перебирает массивы в масиве ----> необходимо, чтобы на одинаковых индексах в разных массивах стояли разные цифры
// ----> индекс пустого места сравнивается с тем же индексом в разных массивах ---> подставляется уникальное число из пула

// arr2[y][x];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i][0] === "-") {
  }
  //   console.log(arr2[i][0]);
}

arr2.forEach((e, index) => {
  for (let i = 0; i < e.length; i++) {
    if (e[i] === "-") {
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j][i]) {
          e[i] = ;
        }
      }

      //   console.log(`Итерация ${i}`);
    }
  }
});
console.log(arr2);


function solve(boardString) {
    const arr = boardString.split("");
    const board = [];
    const sqwrs = [];
  
    for (let i = 0; i < 9; i++) {
      board.push(arr.slice(0, 9));
      arr.splice(0, 9);
    }
  
    let a = 0;
    let b = 3;
    for (let g = 0; g < 3; g++) {
      let x = 0;
      let y = 3;
      for (let h = 0; h < 3; h++) {
        let nmbrs = [];
        for (let i = a; i < b; i++) {
          for (let j = x; j < y; j++) {
            nmbrs.push(board[i][j]);
          }
        }
        sqwrs.push(nmbrs);
        x += 3;
        y += 3;
      }
      a += 3;
      b += 3;
    }
  
    function compliteSudocu(field, sqwr) {
      const numberPool = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let startField = field;
  
      for (let i = 0; i < startField.length; i += 1) {
        startField[i].forEach((num, index) => {
          if (num === "-") {
            // console.log(`${num} === "-"`); // сработает
            // eslint-disable-next-line no-restricted-syntax
            slovo: for (let j = 0; j < numberPool.length; j += 1) {
              // console.log(`${j} пошел`);
  
              if (
                !startField[i].includes(numberPool[j]) &&
                startField[0][index] !== numberPool[j] &&
                startField[1][index] !== numberPool[j] &&
                startField[2][index] !== numberPool[j] &&
                startField[3][index] !== numberPool[j] &&
                startField[4][index] !== numberPool[j] &&
                startField[5][index] !== numberPool[j] &&
                startField[6][index] !== numberPool[j] &&
                startField[7][index] !== numberPool[j] &&
                startField[8][index] !== numberPool[j]
              ) {
                for (let h = 0; h < sqwr.length; h++) {
                  if (sqwr[h].includes(num)) {
                    // console
                    //   .log
                    //   // `${startField[i].indexOf(num)} nahidtsya v kvadrat ${h}`
                    //   ();
                    if (sqwr[h].includes(numberPool[j])) {
                      continue slovo;
                    } else {
                      sqwr[h][sqwr[h].indexOf(num)] = numberPool[j];
                      startField[i][index] = numberPool[j];
                      break slovo;
                    }
                  }
                }
                console.log("if includes сработал");
                startField[i][index] = numberPool[j];
              }
            }
          }
        });
      }
  
      for (element of field) {
        if (!element.includes("-")) return startField;
        return startField;
      }
    }
  
    compliteSudocu(board, sqwrs);
    return board;
  }

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

const arr = [
  [1, 2, 3, 0, 6, 4, 8, 5, 9],
  [1, 4, 5, 2, 3, 6, 0, 8, 9],
  [2, 1, 4, 6, 0, 9, 5, 7, 8],
  // <---------------------->
  [3, 4, 5, 2, 3, 0, 7, 8, 1],
  [9, 0, 5, 1, 3, 6, 7, 8, 4],
  [3, 4, 9, 2, 1, 6, 7, 8, 0],
  // <---------------------->
  [5, 6, 8, 2, 0, 4, 2, 3, 9],
  [4, 2, 0, 5, 9, 3, 6, 1, 8],
  [7, 3, 6, 9, 2, 0, 1, 8, 4],
];

function solve() {
  // счетчик вызова функции
  // какой то цикл
  //
  // eslint-disable-next-line array-callback-return
  const incorrectArr = arr.map((el) => el.map((e) => {
    // console.log(e);
    if (e === 0) {
      return Math.floor(Math.random() * (9 - 1 + 1));
    }
    return e;
  }));

  // е сли счетчик четный то возвращает return Math.random(sudoku1 2 3 4 5 )

  console.log(incorrectArr);
}

solve(arr);

// const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//   const row = arr[i];
//   for (let j = 0; j < row.length; j++) {
//     if (row[j] === 0) {
//       row[j] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
//     }
//   }

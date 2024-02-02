const { solve } = require('./solve');

function isSolved(grid) {
  // Проверяем на то, что все элементы числами и находятся в нашем диапазоне
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      const numMy = grid[i][j];
      if (typeof numMy !== 'number' || numMy < 0 || numMy > 9) {
        return false;
      }
    }
  }

  // Проверяем на то, что все числа в строке, столбце и квадрате не повторяются
  for (let i = 0; i < 9; i += 1) {
    // создаем множества для хранения промежуточного результата
    const row = new Set();
    const col = new Set();
    const box = new Set();
    // Проверяем строки, столбцы и квадраты
    for (let j = 0; j < 9; j += 1) {
      let numMy = grid[i][j];
      if (row.has(numMy)) return false;
      row.add(numMy);

      numMy = grid[j][i];
      if (col.has(numMy)) return false;
      col.add(numMy);

      numMy = grid[(Math.floor(i / 3) * 3) + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];
      if (box.has(numMy)) return false;
      box.add(numMy);
    }
  }

  return true;
}
// правильно решенная матрица
// const trueDemoMatrix = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [2, 3, 1, 5, 6, 4, 8, 9, 7],
//   [5, 6, 4, 8, 9, 7, 2, 3, 1],
//   [8, 9, 7, 2, 3, 1, 5, 6, 4],
//   [3, 1, 2, 6, 4, 5, 9, 7, 8],
//   [6, 4, 5, 9, 7, 8, 3, 1, 2],
//   [9, 7, 8, 3, 1, 2, 6, 4, 5],
// ];

// не правильно решенная матрица
// const falseDemoMatrix = [
//   [1, 1, 3, 4, 5, 6, 7, 8, 9],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [2, 3, 1, 5, 6, 4, 8, 9, 7],
//   [5, 6, 4, 8, 9, 7, 2, 3, 1],
//   [8, 9, 7, 2, 3, 1, 5, 6, 4],
//   [3, 1, 2, 6, 4, 5, 9, 7, 8],
//   [6, 4, 5, 9, 7, 8, 3, 1, 2],
//   [9, 7, 8, 3, 1, 2, 6, 4, 5],
// ];
// console.log(isSolved(trueDemoMatrix));// true
// isSolved(falseDemoMatrix);// false

console.log(isSolved(solve()));

module.exports = { isSolved };

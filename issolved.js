const { solve } = require('./solve');
const { num, read } = require('./read')

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

// console.log(isSolved(solve(read(num))));

module.exports = { isSolved };

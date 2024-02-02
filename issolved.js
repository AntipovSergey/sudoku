const { solve } = require('./solve');
const { num, read } = require('./read')

function isSolved(grid) {
  // Проверяем на то, что все элементы числами и находятся в нашем диапазоне
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      const num = grid[i][j];
      if (typeof num !== 'number' || num < 0 || num > 9) {
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
      let num = grid[i][j];
      if (row.has(num)) return false;
      row.add(num);

      num = grid[j][i];
      if (col.has(num)) return false;
      col.add(num);

      num = grid[(Math.floor(i / 3) * 3) + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];
      if (box.has(num)) return false;
      box.add(num);
    }
  }

  return true;
}

// console.log(isSolved(solve(read(num))));

module.exports = { isSolved };

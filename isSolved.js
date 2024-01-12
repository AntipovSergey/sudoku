function isSolved(solve) {
  function checkNum(input) {
    for (let i = 1; i <= 9; i++) {
      if (input.indexOf(i) === -1) {
        return false;
      }
    }
    return true;
  }
  // переворачиваем массив для проверки строк
  function transpose(arr) {
    for (let i = 0; i < 9; i++) {
      for (let j = i + 1; j < 9; j++) {
        const temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }
    return arr;
  }

  // создание массива из квадрата 3x3
  // X и Y координаты верхнего левого угла квадрата
  function block(Y, X, arr) {
    const output = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        output.push(arr[Y + i][X + j]);
      }
    }
    return output;
  }

  const transposedsolve = transpose(solve);

  // проверка массива solve
  for (let i = 0; i < 9; i++) {
    // проверяем правильность строк и столбцов
    if (!checkNum(solve[i]) || !checkNum(transposedsolve[i])) {
      return false;
    }
    // проверка квадратов 3x3
    const y = Math.floor(i / 3) * 3;
    const x = (i % 3) * 3;
    if (!checkNum(block(y, x, solve))) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isSolved,
};
/**
       * Принимает игровое поле в том формате, в котором его вернули из функции solve.
       * Возвращает булевое значение — решено это игровое поле или нет.
       */

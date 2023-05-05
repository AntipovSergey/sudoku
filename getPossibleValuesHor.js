// Функция проходит по первой строке, проверяет наличие в ячейках уже имеющиеся цифры, в итоге выводит массив доступных цифр для пустых (0) ячеек. Находит значение для определенной ячейки.
// newArr - в него пушим найденные значения по ячейкам в строке
// rezultArr - в него пушим допустимые для ячеек значения

const getPossibleValuesHor = (coord, arr) => {
  const rowInd = Number(coord.split(",")[0]);
  let resultArr = [];
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newArr = [];

  // Поиск чисел, отличных от 0
  for (let i = 0; i < arr[rowInd].length; i += 1) {
    if (arr[rowInd][i] !== 0) {
      newArr.push(arr[rowInd][i]);
    }
  }

  resultArr = array.filter((el) => !newArr.includes(el));

  return resultArr;
};

module.exports = getPossibleValuesHor;

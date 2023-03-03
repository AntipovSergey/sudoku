

function putIntegersIntoSmallSquere(arr) {
    /// for (arr9) {}
  const resultArr = [...arr];
  for (let c = 0; c < arr.length; c++) {
    for (let d = 0; d < arr.length; d++) {
      // находим пустые элементы
      if (arr[c][d] === '-') {
        for (let index = 1; index <= 9; index++) {
          // подставляем числа от 1 до 9
          const arrToString = arr.flat().join('');
          // проверяем, что предложенное число 'index' не существуем в массиве 3х3
          if (arrToString.indexOf(index) === -1) {
            for (let i = 0; i < arr.length; i++) {
              // проверяем, что предложенное число 'index' не повторяется в строках массива
              if (!arr[i].includes(index.toString())) {
                // проверяем, что предложенное число 'index' не повторяется в столбцах массива
                for (let j = 0; j < arr.length; j++) {
                  if (arr[j][i] !== index.toString()) {
                    // после 3х проверок меняем значение в массиве на цифру index
                    resultArr[c][d] = index.toString();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return resultArr
}
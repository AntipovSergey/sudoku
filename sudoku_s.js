//Функция, которая вставляет элемент в массив, если возможен лишь один вариант 
function pasteElem(arr, opportunitiesArr) {
  let elementsWithOneOpp = false;

  for (let i = 0; i < opportunitiesArr.length; i++) {
    for (let j = 0; j < 9; j++) {
      if (opportunitiesArr[i][j][0] === 1) {
        arr[i][j] = opportunitiesArr[i][j][1][0];
        elementsWithOneOpp = true;
      }
    }
  }

  return elementsWithOneOpp ? arr : false;
}

//Функция, которая проверяет, остались ли незаполненные элементы
function isSolved(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] === 0) return false;
    }
  }

  return true;
}

//Экспорт функций
module.exports = {
  pasteElem: pasteElem,
  isSolved: isSolved
};

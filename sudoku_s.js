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

//Функция, которая принимает массив и проверяет есть ли одинаковые элементы
function hasConflicts(arr) {
  function hasConflictsInRow(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 9; j++) {
        for (let k = j + 1; k < 9; k++) {
          if (arr[i][j] === arr[i][k]) return false;
        }
      }
    }

    return true;
  }

  function hasConflictsInColumn(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 9; j++) {
        for (let k = i + 1; k < 9; k++) {
          if (arr[i][j] === arr[k][j]) return false;
        }
      }
    }

    return true;
  }
  console.log(hasConflictsInRow(arr));


  let result;
  if (hasConflictsInRow(arr)) {
    result = hasConflictsInColumn(arr);
  } else return false;

  return result;
}

let testArr = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6, 6, 6, 6, 6],
  [7, 7, 7, 7, 7, 7, 7, 7, 7],
  [8, 8, 8, 8, 8, 8, 8, 8, 8],
  [9, 9, 9, 9, 9, 9, 9, 9, 9]
];

console.log(hasConflicts(testArr));







//Экспорт функций
module.exports = {
  pasteElem: pasteElem,
  isSolved: isSolved
};

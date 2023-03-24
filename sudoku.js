
function num () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        if ((findValVer(empty, arr[i]) && findValHor(empty, arr[i]))) {
            newArr[findEmpty(newArr)[0]][findEmpty(newArr)[1]] = arr[i];
            // вызов функции самой себя
        }
    return arr[i];
    }
      }

let number = num();

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

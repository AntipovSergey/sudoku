// ищет пустой элемент в массиве, возвращает массив с его координатами, если пустых элементов нет возвращает false
function getCoordinate(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr[i].length; x++) {if (arr[i][x] === '-') return [i, x];}
  }
  return false;
};

// const arrFoTest = [
//   [7, 6, 2, '-', 8, 3, 1, 9, 4],
//   [1, '-', 5, 8, '-', 2, '-', '-', '-']
// ]
// console.log('test', getCoordinate(arrFoTest));

module.exports = getCoordinate();
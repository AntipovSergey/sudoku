str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
function splitStr(str) {
  return str.match(/.{1,9}/g).map(item => item = [...item])
}
let arrArr = splitStr(str)

console.table(arrArr)

arr = ['1', '-', '5', '8', '-', '2', '-', '-', '-', '-'];
function findRow(num, arr) {
  return arr.includes(String(num));
}

// Функция squareMade(arrArr, i, j)
// Получает массив из let arrArr = splitStr(str) => массив массивов 9 на 9
// и координаты КлеткаПроверки(9х9)(i,j)
// Дополнительная функция littleBoxIj(i, j) => присваивает уникальный 2-х мерный 
// id матрицы 3x3 по параметрам передаваемой клетки (i,j)
// Функция squareMade(arrArr, i, j) возвращает box_1x9 (одномерный массив с данными клетки(i,j))
function littleBoxIj(i, j) {
  return {
    i: Math.floor(i / 3) * 3,
    j: Math.floor(j / 3) * 3,
  }
}
function squareMade(arrArr, i, j) {
  let [ii, jj] = [...Object.values(littleBoxIj(i, j))]
  let size_ii = ii + 3;
  let size_jj = jj + 3;
  let row = [];
  for (let i = ii; i < size_ii; i++) {
    for (let j = jj; j < size_jj; j++) {
      row.push(arrArr[i][j]);
    }
  }
  return row
}
console.log(squareMade(arrArr, 5, 6))













// module.exports = findRow;
// console.log(findRow(8, arr))

// const getRow = require('./getRow');// возвращает строку неизвестного элемента
// const getSector = require('./getSector'); // возвращает квадрат неизвестного элемента
// const getColumn = require('./getColumn'); // возвращает столбец неизвестного элемента
function possibleValues(array) {
  const possibleResults = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] == 0) {
      const newArray = [];
      for (let i = 0; i < possibleResults.length; i += 1) {
        const merge = [...getRow, ...getSector, ...getColumn];// ...getSector()
        if (possibleResults[i].some(merge) == false) {
          newArray.push(i);
        }
      }
      result.push(newArray);
    } else {
      result.push(array[j]);
    }
  }
  return result;
}
console.log(possibleValues('105802000090076405200400819019007306762083090000061050007600030430020501600308900'));

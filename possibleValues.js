const { getRow } = require("./getRow"); // возвращает строку неизвестного элемента
const { getSector } = require("./getSector"); // возвращает квадрат неизвестного элемента
const { getColumn } = require("./getColumn"); // возвращает столбец неизвестного элемента
function possibleValues(array) {
  const possibleResults = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];
  let flagRecursion = false;
  let flagModifayed = false;
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === 0 || Array.isArray(array[j])) {
      const newArray = [];
      for (let i = 0; i < possibleResults.length; i += 1) {
        const merge = [
          ...getRow(array, j),
          ...getSector(array, j),
          ...getColumn(array, j),
        ];
        if (merge.indexOf(possibleResults[i]) === -1) {
          newArray.push(possibleResults[i]);
        }
      }
      if (newArray.length === 1) {
        result.push(newArray[0]);
        flagModifayed = true;
      } else {
        result.push(newArray);
        flagRecursion = true;
      }
    } else {
      result.push(array[j]);
    }
  }
  if (flagRecursion && flagModifayed) {
    return possibleValues(result);
  }
  return result;
}
module.exports = { possibleValues };

// Сделать функцию, которая наполнит объект, в котором будет ключ (по координате элемента) и значение ключа (если элемент == "-", то массиву(или строке) из цифр от 1 до 9, иначе значению элемента) / makeObjFromarrWithSolution

function makeObjFromArr(arrWithSolution) {
  const objectContainingValues = {};
  for (let i = 0; i < arrWithSolution.length; i += 1) {
    for (let j = 0; j < arrWithSolution[i].length; j += 1) {
      if (arrWithSolution[i][j] === '-') {
        objectContainingValues[`${i}${j}`] = ['1','2', '3', '4', '5', '6', '7', '8', '9'];
      } else {
        objectContainingValues[`${i}${j}`] = []
        objectContainingValues[`${i}${j}`].push(arrWithSolution[i][j]);
      }
    }
  }
  return objectContainingValues;
}

module.exports = makeObjFromArr;
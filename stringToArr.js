//Сделать из строки вложенный массив / stringToArr

function stringToArr(str) {
  const arrWithSolution = [];
  let count = 0;
  for (let i = 0; i < 9; i += 1) {
    const newArr = [];
    for (let j = 0; j < 9; j += 1, count += 1) {
      newArr.push(String(str[count]));
    }
    arrWithSolution.push(newArr);
  }
  return arrWithSolution;
}

module.exports = stringToArr;
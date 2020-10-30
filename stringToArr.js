//Сделать из строки вложенный массив / stringToArr

function stringToArr(str) {
  const arrWithSolution = [];
  for (let i = 0; i < 9; i += 1) {
    const newArr = [];
    for (let j = 0; j < 9; j += 1) {
      newArr.push(String(str[j]));
    }
    arrWithSolution.push(newArr);
  }
  return arrWithSolution;
}

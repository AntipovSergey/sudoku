const fs = require('fs');
const data = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function arrInArr(data, number) {
  let resultArr = data.split('\n');
  let stringsArr = [];
  for(let i = 9;i <= resultArr[number].length; i += 9) {
    stringsArr.push(resultArr[number].slice(i - 9, i));
    console.table(stringsArr)
  }
  const numsArr = stringsArr.map(function (num) {
    return num.split('');
  })
  return numsArr;
}

function numberOrNan (numb) {
  const baseArr= arrInArr(data, numb);
  let numbersArr = [];
  for (let el of baseArr) {
    const temporaryArr = [];
      for (let i = 0; i < el.length; i += 1) {
        if (el[i] === '-') {
          temporaryArr.push('-')
        } else {
          temporaryArr.push(el[i])
        }
      }
      numbersArr.push(temporaryArr);
  }
  return numbersArr;
}
console.table(numberOrNan(0))


/*
function parsingArr(data) {
  let arr = [];
  for (let i = 0; i < data.length;i += 9) {
    arr.push(data.slice(i + 9, i).split(' '))
  }
  return arr;
}
parsingArr(data);
console.table(parsingArr(data));
*/

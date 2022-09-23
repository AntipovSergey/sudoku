const fs = require('fs');

function readFile() {
  const dataText = fs.readFileSync('./puzzles.txt', 'utf-8');
  const stringsArr = dataText.trim().split('\n');
  const dataArr = stringsArr.map((el) => {
    let sudokuStr = '';
    let innerArray;
    for (let i = 0; i < el.length; i += 9) {
      sudokuStr += el.slice(i, i + 9);
      sudokuStr += '.';
      innerArray = sudokuStr.split('.');
      innerArray = innerArray.slice(0, 9);
    }
    return innerArray;
  });
  let resultArr = dataArr.map((arr) => {
    const newArr = arr.map((el) => {
      const innerInnerArr = el.split('');
      const correctElements = innerInnerArr.map((el) => {
        if (+el) {
          return +el;
        } else {
          return 0;
        }
      });
      return correctElements;
    });
    return newArr;
  });

  return resultArr;
}

module.exports = readFile;
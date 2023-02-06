function strToArr(str) {
  const massive = [];
  for (let i = 0; i < 81; i += 9) {
    massive.push(str.slice(i, i + 9).split(''));
  }
  return massive;
}

module.exports = strToArr;

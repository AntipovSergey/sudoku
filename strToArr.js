function strToArr(str) {
  const arr = [];
  for (let i = 0; i < 81; i += 9) {
    arr.push(str.slice(i, i + 9).split(''));
  }
  return arr;
}

module.exports = strToArr;

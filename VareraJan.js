function getArr(string) {
  const result = [];
  if (string.length % 9 !== 0) return false;
  for (let i = 0; i < 9; i++) {
    result.push(string.slice(i, i + 9).split(''));
  }
  return result;
}

function getStr(arr) {
  let str = '';
  arr.forEach((item) => str += item.join(''))
  return str
}

module.exports = {getArr, getStr}

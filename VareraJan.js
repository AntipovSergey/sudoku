function getArr(string) {
  const result = [];
  if (string.length % 9 !== 0) return false;
  let arr = string.split('')
  for (let i = 0; i < 9; i++) {
    result.push(arr.slice(0, 9));
    arr.splice(0, 9)

  }
  return result;
}

function getStr(arr) {
  let str = '';
  arr.forEach((item) => str += item.join(''))
  return str;
}

module.exports = {getArr, getStr}

// console.table(getArr('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'));

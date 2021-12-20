function check(arr, tempArray, num) {
  const x = tempArray[0];
  const y = tempArray[1];
  const arrDop = [];
  for (let i = 0; i < arr.length; i++) {
    arrDop.push(arr[i][y]);
  }
  if (!arr[x].includes(num) && !arrDop.includes(num)) {
    return true;
  } return false;
}
module.exports = check;


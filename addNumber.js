function addNumber(arr, indexArr, num) {
  arr[indexArr[0]][indexArr[1]] = num.toString();
  return arr;
}

module.exports = addNumber;

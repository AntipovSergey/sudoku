function horizontal(arr, argv) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[0][i] === argv) {
      return true;
    }
  }
  return false;
}

module.exports = horizontal;

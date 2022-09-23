function check(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const objValue = Object.values(arr[i]);
    for (let j = 0; j < objValue.length; j++) {
      if (objValue[j] === 'yes') {
        count++;
      }
    }
  }
  if (count === arr.length) {
    return true;
  }

  return false;
}

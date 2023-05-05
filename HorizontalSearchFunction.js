function horizontalSearch(array, number) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push([]);

    for (let j = 0; j < array[i][0].length; j++) {
      result[i].push(array[i][0].split('')[j]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].includes(number.toString())) {
      return true;
    }
  }
  return false;
}

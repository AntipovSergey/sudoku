function horizontalSearch(array, number) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === number) {
        return true;
      }
    }
  }
  return false;
}

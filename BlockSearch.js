function blockSearch(array, number) {
  for (let i = 0; i < array.length; i++) {
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        if (array[row][column] === String(number)) {
          return true;
        }
      }
    }
    row = 0;
  }

  return false;
}

const arr = [
  [
    ['1-58-2---'],
    ['-9--764-5'],
    ['2--4--819'],
    ['-19--73-6'],
    ['762-83-9-'],
    ['----61-5-'],
    ['--76---3-'],
    ['43--2-5-1'],
    ['6--3-89--'],
  ]];
console.log(blockSearch(arr, 8));

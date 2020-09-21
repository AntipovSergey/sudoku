function searchBox(arr, i, j, number) {
  let arrBox = [];
  if (i < 3) {
    if (j < 3) {
      arrBox.push(arr[0].splice(0, 3));
      arrBox.push(arr[1].splice(0, 3));
      arrBox.push(arr[2].splice(0, 3));
    } else if (j < 6) {
      arrBox.push(arr[0].splice(3, 3));
      arrBox.push(arr[1].splice(3, 3));
      arrBox.push(arr[2].splice(3, 3));
    } else {
      arrBox.push(arr[0].splice(6, 3));
      arrBox.push(arr[1].splice(6, 3));
      arrBox.push(arr[2].splice(6, 3));
    }
  } else if (i < 6) {
      if (j < 3) {
        arrBox.push(arr[3].splice(0, 3));
        arrBox.push(arr[4].splice(0, 3));
        arrBox.push(arr[5].splice(0, 3));
      } else if (j < 6) {
        arrBox.push(arr[3].splice(3, 3));
        arrBox.push(arr[4].splice(3, 3));
        arrBox.push(arr[5].splice(3, 3));
      } else {
        arrBox.push(arr[3].splice(6, 3));
        arrBox.push(arr[4].splice(6, 3));
        arrBox.push(arr[5].splice(6, 3));
      }
    } else {
    if (j < 3) {
      arrBox.push(arr[6].splice(0, 3));
      arrBox.push(arr[7].splice(0, 3));
      arrBox.push(arr[8].splice(0, 3));
    } else if (j < 6) {
      arrBox.push(arr[6].splice(3, 3));
      arrBox.push(arr[7].splice(3, 3));
      arrBox.push(arr[8].splice(3, 3));
    } else {
      arrBox.push(arr[6].splice(6, 3));
      arrBox.push(arr[7].splice(6, 3));
      arrBox.push(arr[8].splice(6, 3));
    }
  }
  let find = true;
  for (let i = 0; i < arrBox.length; i += 1) {
    for (let j = 0; j < arrBox[i].length; j += 1) {
      if (arrBox[i][j] === number) {
        find = false;
        break;
      }
    }
  }
  return find;
};
console.log(searchBox([
  [1, 2, 3, 4, 5, 6, 7, 8, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 15, 6, 12, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 12, 9],
],
 0, 6, 14))

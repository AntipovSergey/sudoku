function searchString(rowIndex) {
  let str = arrMain[rowIndex].join('');
  return str.match(/\d/g);
}

console.log((searchString(rowIndex)));

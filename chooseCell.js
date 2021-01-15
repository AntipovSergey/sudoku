let rowIndex;
let columnIndex;

function xy() {
  for (let i = 0; i < arrMain.length; i++) {
    for (let j = 0; arrMain[i].length; j++) {
      if (arrMain[i][j] == '-') {
        rowIndex = i;
        columnIndex = j;
        return;
      }
      continue;
    }
  }
}

xy();



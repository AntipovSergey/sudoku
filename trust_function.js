const board = [[1, 4, 5, 8, 9, 2, 6, 7, 3],
  [8, 9, 3, 1, 7, 6, 4, 2, 5],
  [2, 7, 6, 4, 3, 5, 8, 1, 9],
  [5, 1, 9, 2, 4, 7, 3, 8, 6],
  [7, 6, 2, 5, 8, 3, 1, 9, 4],
  [3, 8, 4, 9, 6, 1, 7, 5, 2],
  [9, 5, 7, 6, 1, 4, 2, 3, 8],
  [4, 3, 8, 7, 2, 9, 5, 6, 1],
  [6, 2, 1, 3, 5, 8, 9, 4, 7]];
function isSolved(board) {
  // Проверка строк
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      for (let k = j + 1; k < board[i].length; k++) {
        if (board[i][j] === board[i][k] || Number(board[i][j]) > 9 || Number(board[i][j]) < 1) {
          return false;
        }
      }
    }
  }
  // Проверка столбцов
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      for (let k = j + 1; k < board[i].length; k++) {
        if (board[j][i] === board[k][i]) {
          return false;
        }
      }
    }
  }
  // Проверка квадратов

  const arr1 = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr1.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) {
        return false;
      }
    }
  }
  const arr2 = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      arr2.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr2[i] === arr2[j]) {
        return false;
      }
    }
  }
  const arr3 = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      arr3.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr3.length - 1; i++) {
    for (let j = i + 1; j < arr3.length; j++) {
      if (arr3[i] === arr3[j]) {
        return false;
      }
    }
  }
  const arr4 = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      arr4.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr4.length - 1; i++) {
    for (let j = i + 1; j < arr4.length; j++) {
      if (arr4[i] === arr4[j]) {
        return false;
      }
    }
  }
  const arr5 = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      arr5.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr5.length - 1; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
      if (arr5[i] === arr5[j]) {
        return false;
      }
    }
  }
  const arr6 = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      arr6.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr6.length - 1; i++) {
    for (let j = i + 1; j < arr6.length; j++) {
      if (arr6[i] === arr6[j]) {
        return false;
      }
    }
  }
  const arr7 = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      arr7.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr7.length - 1; i++) {
    for (let j = i + 1; j < arr7.length; j++) {
      if (arr7[i] === arr7[j]) {
        return false;
      }
    }
  }
  const arr8 = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      arr8.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr8.length - 1; i++) {
    for (let j = i + 1; j < arr8.length; j++) {
      if (arr8[i] === arr8[j]) {
        return false;
      }
    }
  }
  const arr9 = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      arr9.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr9.length - 1; i++) {
    for (let j = i + 1; j < arr9.length; j++) {
      if (arr9[i] === arr9[j]) {
        return false;
      }
    }
  }

  return true;
}
console.log(isSolved(board));

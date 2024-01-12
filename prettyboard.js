// const fs = require('fs');

// const data = fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf8').replace(/\n/g, '');

// function createArr(string) {
//   const newArr = [];
//   for (let i = 0; i < string.length; i += 81) {
//     const sudokuPuzzle = [];
//     for (let j = i; j < i + 81; j += 9) {
//       sudokuPuzzle.push(string.slice(j, j + 9).split(''));
//     }
//     newArr.push(sudokuPuzzle);
//   }

//   return newArr;
// }

function prettyBoard(sudokuArray) {
  const emojis = {
    1: '\u0031\uFE0F\u20E3',
    2: '\u0032\uFE0F\u20E3',
    3: '\u0033\uFE0F\u20E3',
    4: '\u0034\uFE0F\u20E3',
    5: '\u0035\uFE0F\u20E3',
    6: '\u0036\uFE0F\u20E3',
    7: '\u0037\uFE0F\u20E3',
    8: '\u0038\uFE0F\u20E3',
    9: '\u0039\uFE0F\u20E3',
    '-': '\u0030\uFE0F\u20E3',
  };

  const newSudokuBoard = sudokuArray.map((row, rowIndex) => {
    const rowWithEmojis = row.map((el, colIndex) => {
      const elementAsString = String(el);
      return elementAsString in emojis ? emojis[elementAsString] : ' ';
    });

    const rowWithVerticalSeparators = rowWithEmojis.reduce((acc, el, index) => {
      if (index % 3 === 2 && index < rowWithEmojis.length - 1) {
        return `${acc + el} | `;
      }
      return `${acc + el} `;
    }, '');

    return rowWithVerticalSeparators;
  });

  const boardWithHorizontalSeparators = newSudokuBoard.reduce((acc, row, index) => {
    if (index % 3 === 2 && index < newSudokuBoard.length - 1) {
      return `${acc + row}\n${'-'.repeat(22)}\n`;
    }
    return `${acc + row}\n`;
  }, '');

  return boardWithHorizontalSeparators;
}

// const sudokoData = [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ];

// console.log(prettyBoard(sudokoData));

module.exports = {
  prettyBoard,
};

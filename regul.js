const fs = require('fs');
const text = fs.readFileSync('./sudoku-puzzles.txt', 'utf8');

function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  return puzzle;
}
function doArr(str) {
  const nums = [];
  const nums1 = [];
  const numsAll = str.match(/([\d-]{9})/g);
  numsAll.forEach((el) => {
    const nums1 = el.match(/([\d-]{1})/g);
    nums.push(nums1);
  });
  return nums;
};
// console.table(doArr(sudokuParse(text)));

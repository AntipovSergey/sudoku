function isValid(board, row, column, num) {
  if (rowSearch(board, row, num)
  && columnSearch(board, column, num)
   && squareSolution(board, row, column, num)) {
    return true;
  } return false;
}
module.exports = { isValid };
 
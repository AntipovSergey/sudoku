function prettyBoard(board) {
  let prettyBoard = board.map((el) => (el = el.join(" "))).join("\n");
  return prettyBoard;
}
console.log(prettyBoard(board));

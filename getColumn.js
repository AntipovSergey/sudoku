function getColumn(sud, ind) {
  const colNum = Math.floor(ind % 9);
  const start = colNum;
  let result = [];
  for (let i = start; i < sud.length; i += 9) {
    result.push(sud[i]);
  }
  return result;
}

function getRow(sud, index) {
  let result = [];
  const ind = Math.floor(index / 9);
  const start = ind * 9;
  const finish = start + 9;
  // for (let i = start; i < finish; i++) {
  //   if (sud[i] != 0) {
  //     result.push
  //   }
  // }
  return sud.slice(start, finish);
}
module.exports = { getRow };

function getRow(sud, index) {
  const ind = Math.floor(index / 9);
  const start = ind * 9;
  const finish = start + 9;
  console.log(start);
  console.log(finish);
  return sud.slice(start, finish);
}
module.exports { getRow };

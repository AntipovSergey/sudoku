function customParse(str, maxLength = 9) {
  let puzzle = [];
  if (str.length <= maxLength) return str;
  let reg = new RegExp(".{1," + maxLength + "}", "g");
  let parts = str.match(reg);
  for (let part of parts) {
    
    for (let i = 0; i < part.length; i++) {
      newRow = part.split("");
    }
    puzzle.push(newRow.map((el) => (el == "-" ? (el = 0) : Number(el))));
  }
  return puzzle;
}

module.exports = customParse;

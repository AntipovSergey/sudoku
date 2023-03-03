const input = [
["4", "-", "1", "-"], 
["-", "2", "-", "-"], 
["-", "-", "3", "-"],
["-", "-", "2", "-"],
];
console.table(input);
const size = 4;

function bordValidate(num, position, bord) {
  const [r, c] = position;

  // проверка по строке
  for (let i = 0; i < size; i++) {
    if (bord[i][c] === num && i !== r) {
      return false;
    }

    // console.log(bordValidate(num, c, bord));
  }
  // проверка по колонке
  for (let i = 0; i < size; i++) {
    if (bord[i][r] === num && i !== c) {
  return false;
    }  
  }
}

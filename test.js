const matrix = [
  [45, 87, 64, 83, 94, 77, 13, 20, 79],
  [10, 75, 32, 63, 41, 46, 38, 24, 57],
  [92, 35, 80, 48, 15, 69, 97, 22, 67],
  [34, 51, 90, 27, 73, 18, 93, 50, 37],
  [26, 85, 40, 5, 30, 95, 70, 47, 76],
  [58, 16, 60, 33, 2, 84, 71, 96, 43],
  [86, 61, 99, 53, 72, 36, 11, 4, 81],
  [7, 82, 56, 91, 39, 54, 68, 65, 19],
  [52, 23, 31, 74, 62, 49, 88, 98, 14],
];
// console.table(matrix)

function pushConsole(matrix){
      let row = 0
      for(let j = 0; j < 9; j++){
        if(j % 3 === 0 && j !== 0){
       row += '| '
        }
        row += matrix[j] + ' '
      }return row
      // console.table(matrix)
    }

console.log(pushConsole(matrix))
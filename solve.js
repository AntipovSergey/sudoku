const read = require('./read')

// function solve() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции read.
//    * Возвращает игровое поле после попытки его решить.
//    */
// }
// solve()



function row(){
  let all = read().split(',').join('')
  console.log(all)
  let row = []
  for (let i = 0; i < all.length; i++){
 row.push(i)
  }
  return row
}
(row)

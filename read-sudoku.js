const fs = require('fs');

function readMap (){
  let box;
  fs.readFile('./puzzles.txt', 'utf8', (err, data) => {
    if (err) throw err;
    data.split('\n').filter((line) => line !== '');
    box = data.split('\n')
    // console.log(box);
    // console.log(typeof box[0]);//
     return box;
    
  }); return box
}
  console.log(readMap());
//   const arrayString = readMap();
  
//     function numSud (){
//       let box = arrayString;
//       console.log(box);
//       let num = [];
//       for (let j =0; j < box.length; j++){
//       for (let i = 0; i <box[j].length; i++) {
//         if (parceint(box[j][i]) >=1 && parceint(box[j][i]) <=9){
// num.push[box[j][i]]
//         }
//         else {
//           num.push[0]
//         }
//         return num
//       }
//     }
//   }
//   console.log(numSud(readMap()))
// // console.log(numSud(readMap()))

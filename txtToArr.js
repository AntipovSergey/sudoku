const fs = require('fs');
let playYard = fs.readFileSync('./puzzles.txt','utf-8').trim().split('\n')
console.log(playYard)
function splitPlayYard(playYard,index) {
  let playYardArray = []
  for (let i=0;i<playYard.length;i++) {
  playYardArray.push([playYard[i]])
  }
  return playYardArray[index]
  }
console.log(splitPlayYard(playYard,0))
  

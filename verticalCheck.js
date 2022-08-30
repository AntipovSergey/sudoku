const solve = require('./solve')

const verticalCheck = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      // console.log(`Номер столба ${i} ==> ${arr[j][i]}`)
      if (arr[i][j] === arr[j][i]) {
        console.log('Есть совпадение')
      } else {
        // console.log('Совпадений нет')
      }  
    }

  }
  console.log(console.table(arr))
 
};


verticalCheck(solve('716235984528974316394816527845163792271489635639752841982647153163528479457391268'))
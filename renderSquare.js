const {searchElForLine} = require('./searchElForLine');
const {setStringInTwoArr} = require('./setStringInTwoArr')
const {arraySudoku} = require('./main')

function renderSquare(obj, arr) {

  for(let key in obj) {
    obj[key] != null
  }
  //perebirau kluchi
  for(let key in obj) {
    //perebirau massive
    for(let i = 0; i < arr.length; i++) {
      //ishu cluchi ravnie null
      if(obj[key] === null) {
        //esli massive soderjit 1 num - prisvaivau num kluchu
        if(arr.length === 1) {
          obj[key] = arr[0];
        } else {
          //esli > 1 num
          arr.forEach(el => {
          if(searchElForLine(setStringInTwoArr(), el) === false) {
            obj[key] = el;
            arr.slpice(arr.findIndex(el), 1);
          }
        })
      }
    }
  }
  return obj;
}



obekt = {
  '0.1': 1,
  '0.2': 2,
  '0.3': null,
}

array = [3, 4]




module.exports = {
	searchElForLine
}

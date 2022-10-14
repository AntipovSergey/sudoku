


let testString = ('1-58-2----9--764-52--4--819-19--73-c-83-9-----61-5---76---3-43--2-5-16--3-89--')

function arrayStructure(string){
  
    let boardArr = [];
    
    for ( let i = 0; i < string.length; i = i+9 ){
      
     let innerBoarddArr = [];
      
      for ( let j = i; j < i+9; j++ ){
        innerBoarddArr.push(string[j])
      }
      boardArr.push(innerBoarddArr)
    }
    return boardArr
}

  module.exports = (arrayStructure)
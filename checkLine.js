function checkLine (ArrOfNum){
    const CheckArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let StringCheckArr =[]
    for (let i=0; i < ArrOfNum.length; i++){
      const FT = ArrOfNum.includes(CheckArr[i])
      if(FT===false){
        StringCheckArr.push(CheckArr[i])
      }
    }
    return StringCheckArr
  }
  module.exports = checkLine;
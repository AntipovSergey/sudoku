function fillBlock(array,num,i,j){
  if(isHorizontal() && isVertucal() && isBoxGood()) {
      let myResult = "";
    
      array.forEach((element) => {
        if (Array.isArray(element)) {
          myResult += crawlTreeFirst(element);
        } else {
          myResult += element;
          // console.log(myResult);
        }
      });
      return myResult;
    }
  }
  
//wkdfl,ce;sdlf

    module.exports = {
      fillBlock,
    }

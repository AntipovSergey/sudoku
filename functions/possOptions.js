function possibleOp(array){
  
  let result = [];

  for(let j=1; j<=9;j++){
    let count = 0;
    for(let i=0; i < array.length; i++){
      if(j==array[i]){
       count++
      }
    }
    if(count==0)
     result.push(j);
  }
  
  if(result.length==1){
    return result[0]
  } 

   return 0;
   
}

module.exports = possibleOp
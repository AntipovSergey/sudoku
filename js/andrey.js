let arr = [[1,2,3,4,5,6,7,8,9],
[1,2,3,4,5,6,7,8,9],
[1,2,3,4,5,6,7,8,9],
[1,2,3,4,5,6,7,8,9],
[1,2,3,4,5,6,7,8,9],
[1,2,3,4,5,6,7,8,9],
[1,2,3,4,5,6,7,8,9],
[1,2,3,4,5,6,7,8,9],
[1,2,3,4,5,6,7,8,9]];

function convertToSquare3x3Horizontal(array){

  let array2 =[];
  for(let i = 0; i<3; i+=1){
    for( let j = 0; j<3; j+=1){ 
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)
array2 = [9,9,9,9,9,9,9,9,9]
 
  array[0].splice(0,9);
  for( i= 0; i<9; i+=1){
  array[0].push(array2[i]);
  }
  console.log(array);

}
convertToSquare3x3Horizontal(arr);

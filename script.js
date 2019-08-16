

let str="1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

// убирает черточки в строке

function mas(str){ 
  let reg=/-/g

  let str1=(str.replace(reg,'0'))

  return str1;
}
let nums=[1,2,3,4,5,6,7,8,9,];
function goriz(mac){
  let arr=[];
  for(let i=0;i<mac.length;i++){
    let arrNums=nums;
    for(let j=0;j<mac[i].length;j++){
      for(let a=0;a<nums.length;a++){
        if(mac[i][j]===nums[a]){
          nums[a]=null;
        }

      }
    }
  }
  // return arrNums;
}
console.log(goriz(bord));



// // let numbers="123456789";

// function strin(str){
//  let arr=[];
//  let arr1=[];
//  for(let i=0;i<str.length;i++){
//    if(str[i]==='-'){
//      arr.push(0);
//    } else
//      arr.push(str[i]);
     
//    }
//    return arr;
//  }

// console.log (strin(str));
   
let bord=[
    ['1','','5','8','','2','','',''],
    ['-','9','-','-','7','6','4','-','5'],
    ['2','-','-','4','-','-','8','1','9'],
    ['-','1','9','-','-','7','3','-','6'],
    ['7','6','2','-','8','3','-','9','-'],
    ['-','-','-','-','6','1','-','5','-'],
    ['-','-','7','6','-','-','-','3','-'],
    ['4','3','-','-','2','-','5','-','1'],
    ['6','-','-','3','-','8','9','-','-']];

   
    
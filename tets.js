
function cub (arr) {
  let quadrateOfConnectedElements = [];
  let counter = 0; 
  let empty = [];
  let object = {
    '00' : [00, 01, 02, 10, 11, 12, 20, 21, 22],
    '01' : [03, 04, 05, 13, 14, 15, 23, 24, 25],
    '02' : [06, 07, 08, 16, 17, 18, 26, 27, 28],
    '10' : [30, 31, 32, 40, 41, 42, 50, 51, 52],
    '11' : [33, 34, 35, 43, 44, 45, 53, 54, 55],
    '12' : [36, 37, 38, 46, 47, 48, 56, 57, 58],
    '20' : [60, 61, 62, 70, 71, 72, 80, 81, 82],
    '21' : [63, 64, 65, 73, 74, 75, 83, 84, 85],
    '22' : [66, 67, 68, 76, 77, 78, 86, 87, 88], 
  }
  let key =`${Math.floor(y / 3)}${Math.floor(x / 3)}`;
  
 object[key].forEach(item=>{
   
 item = toString(item);
 arr[item[0]][item[1]]

 })
  
  
  
}






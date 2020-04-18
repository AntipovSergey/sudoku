const arr = [
  {test: [1,2,3], test5: [1,2,3]},
  {test2: [4,5,6]},
  {test3: [4,5,6]}
  ]
//   // нужно
//   /* const arrObj = {
//     test: [1,2,3],
//     test2: [1,2,3]
//     }
//  */
// let arr1 = [1,2,3];  //...arr1 = 123 arr1 = {a:1,b:2} ...arr1 a:1 b:2  [ a:1,b:2 ]
// let arr2 = [...arr1];

const arrObj = arr.reduce((acc, el) => {
  console.log('шаг');
  console.log({...acc});
  console.log({...el});
  
  return {...acc, ...el}
}, {});

// const obj = arr.reduce((acc, elem) => {
//   // Object.keys(elem) // [test]
//   // Object.values(elem) // [[1,2,3]]
//   let values = Object.entries(elem) [ ['test', [1,2,3]], ['test', [1,2,3]]]
//   return values.forEach((elem) => {
//     acc[elem[0]] = [elem[1]]
//     // let abc = 'slovo'
//     // acc = {
//     //   slovo: 5
//     // }
//     // acc.abc = 6
//     // {
//     //   slovo: 5,
//     //   abc: 6 
//     // }
//     // acc[abc] 
//   })
  
// }, {})//

console.log(arrObj);
// let bbb = {
//     slovo: 5
//   }
// let ccc = 'slovo'
// console.log(bbb.ccc); // undef
// console.log(bbb[ccc]) // 5


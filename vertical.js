function transpose(arr) {}

let arr = [
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
];

// console.table(arr);

// function transpose(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < i; j++) {
// 			let a = arr[i][j];
// 			arr[i][j] = arr[j][i];
// 			arr[j][i] = a;
// 		}
// 	}
// 	return arr;
// }
// console.table(transpose(arr));

// let array = [
// 	[1, 1, 1],
// 	[2, 2, 2],
// 	[3, 3, 3],
// ];
// let newArr = array.reduce(
// 	(prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
// 	[]
// );
// console.table(newArr);

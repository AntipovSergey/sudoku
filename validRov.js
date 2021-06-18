let arr1 = [
    '2', '9', '-',
    '5', '-', '-',
    '-', '-', '7'
  ]
function isValid(board,row,col,number) {
    function isValidRow(arr) {
        return arr.includes(number)
        }
// 	function isValidCol() {
		
// 	}
// 	function isValidSquare() {
		
// 	}
// isValidRow(arr)
// }

// isValid()

   console.log(isValidRow(arr1));
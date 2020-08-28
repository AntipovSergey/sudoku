function searchMissingOneNumberInArray(arr) {
  let count = 0

  arr.forEach(element => {
    if (element === '-') count++
  })

  if (count === 1) return true
}

function searchAndReplaceOneMissingNumberInArray(arr) {
  const indexMissingNumber = arr.indexOf('-')

  arr[indexMissingNumber] = 0

  const sumAllNumber = arr.reduce((acc, number) => acc += number)

  const missingNumber = 45 - sumAllNumber

  arr[indexMissingNumber] = missingNumber
  return arr
}




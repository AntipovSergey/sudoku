function searchElForLine(str, target) {
  return str.includes(String(target));
}


console.log(searchElForLine('12345678', 8))


module.exports = {
	searchElForLine
}

let counter = 100;
function finalCheck(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes("-")) {
      if (counter == 0) {
        return console.log("сорян, в следующий раз");
      } else {
        counter--;
        return goingThrough(array);
      }
    }
  }
  return (
    console.log("\t     (ツ) М О Л О Д Ц Ы! (ツ) \n\t\t★★★Это ПОБЕДА!★★★"),
    console.table(arr)
  );
}

module.exports = finalCheck;

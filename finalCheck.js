function finalCheck(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes("-")) {
      return checkArr();
  }
    }
      return (
        console.log("\t     (ツ) М О Л О Д Ц Ы! (ツ) \n\t\t★★★Это ПОБЕДА!★★★"),
        console.table(arr)
        );
}

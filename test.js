// console.log("hello");
function foo(string) {
  const res = /(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})(.{9})/;
  const resulr = string.replace(res, '$1\n$2\n$3\n$4\n$5\n$6\n$7\n$8\n$9');
  return resulr;
}

console.log(foo('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

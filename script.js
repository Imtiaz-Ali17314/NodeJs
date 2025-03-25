// let n = 5;

// for (i = 0; i < n; i++) {
//   console.log(i + " hello");
// }

let args = process.argv;

for (i = 2; i < args.length; i++) {
  console.log("hello to " + args[i]);
}

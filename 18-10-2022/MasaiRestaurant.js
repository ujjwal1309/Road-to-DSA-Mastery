function MasaiRestaurant(arr, n) {
  let arr2 = [];
  for (let i = 0; i < n; i++) {
    if (arr[i][0] === 1) {
      if (arr2.length == 0) {
        console.log("No Food");
      } else {
        console.log( arr2.pop());
      }
    } else {
      arr2.push(arr[i][1]);
    }
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = [];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let x = input[line].trim().split(" ").map(Number);
    line++;
    arr.push(x);
  }
  MasaiRestaurant(arr, n);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

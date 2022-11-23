function signalCapacity(arr, n) {
  let stack = [],
    ans = [];
  let i = 0;
  while (i < n) {
    let count = 1;
    while (stack.length && arr[i] >= arr[stack[stack.length - 1]]) {
      count += ans[stack[stack.length - 1]];
      stack.pop();
    }

    ans.push(count);

    stack.push(i);
    i++;
  }

  console.log(ans.join(' '));
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    signalCapacity(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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

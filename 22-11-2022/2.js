function nearestGreater(arr, n) {
  let stack = [];
  let ans = new Array(n);
  let i = n - 1;
  while (i >= 0) {
    let count = 1;
    while (stack.length && arr[i] >= arr[stack[stack.length - 1]]) {
      count += ans[stack[stack.length - 1]];
      stack.pop();
    }

    stack.length==0 ? ans[i]=0 : ans[i]=count;

    stack.push(i);
    i--;
  }
  console.log(ans.join(' '));
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    nearestGreater(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    4
    30 40 50 60
    8
    73 74 75 71 69 72 76 73
    `);
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

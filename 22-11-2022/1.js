function nearestGreater(arr, n) {
  let stack = [],
    ans = [];
  let i = 0;

  while (i < n) {
    let span = 1;
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      span += ans[stack[stack.length - 1]];
      stack.pop();
      
    }

    ans.push(span);

    stack.push(i);
    i++;
  }
  console.log(ans.join(" "));
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
  runProgram(`1
      6
      100 60 70 65 80 85`);
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

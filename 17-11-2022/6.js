function nextGreater(arr, n) {
  let stack = [],
    ans = [],
    i = n - 1;
  while (i >= 0) {
    while (stack.length && arr[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length == 0) {
      stack.push(arr[i]);
      ans.push(-1);
    } else if (arr[i] < stack[stack.length - 1]) {
      ans.push(stack[stack.length - 1]);
      stack.push(arr[i]);
    }
    i--;
  }
  console.log(ans.reverse().join(' '));
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
    nextGreater(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
    4
    1 3 2 4`);
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
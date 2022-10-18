function dailyTemprature(arr, n) {
  let ans = [];
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(0);
      stack.push(i);
    } else if (arr[stack[stack.length - 1]] > arr[i]) {
      ans.push(stack[stack.length - 1] - i);
      stack.push(i);
    }
  }
  ans.reverse();
  console.log(ans.join(" "));
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
    dailyTemprature(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`7
  6
  76 76 75 78 74 71
  7
  72 74 76 80 80 73 71
  9
  78 80 76 70 74 77 71 73 73
  8
  80 70 75 72 74 76 70 74
  10
  76 78 70 76 77 70 73 75 70 73
  5
  73 73 74 73 75
  8
  74 76 79 78 80 75 76 73`);
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

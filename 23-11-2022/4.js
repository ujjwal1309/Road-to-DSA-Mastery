function sumOfNextSmaller(arr, n) {
  let stack = [];
  let i = n - 1;
  let ans = [];
  while (i >= 0) {
    while (stack.length && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (stack.length) {
      ans.push(stack[stack.length - 1]);
    } else {
      ans.push(0);
    }

    stack.push(arr[i]);
    i--;
  }

  ans.reverse();

  let sum = 0;

  for (let i of ans) {
    sum += i;
  }

  console.log(sum);
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
    sumOfNextSmaller(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    4
    4 3 1 2
    4
    1 2 3 4`);
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

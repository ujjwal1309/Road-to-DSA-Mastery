function smallerElement(arr, n) {
  let stack = [],
    ans = [],
    i = 0;
  while (i < n) {
    while (stack.length && arr[i] <= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length == 0) {
      stack.push(arr[i]);
      ans.push(-1);
    } else if (arr[i] > stack[stack.length - 1]) {
      ans.push(stack[stack.length - 1]);
      stack.push(arr[i]);
    }
    // console.log(stack)
    i++;
  }
  console.log(ans.join(' '));
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  smallerElement(arr, n);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`8
    39 27 11 4 24 32 32 1`);
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

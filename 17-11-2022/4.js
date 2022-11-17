function ppp(arr, n) {
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (arr[i][0] === 1) {
      stack.push(arr[i][1]);
    } else if (arr[i][0] == 2) {
      stack.pop();
    } else if (arr[i][0] === 3) {
      stack.length
        ? console.log(stack[stack.length - 1])
        : console.log("Empty!");
    }
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;

  let arr = [];

  for (let i = 0; i < n; i++) {
    let x = input[line].trim().split(" ").map(Number);
    line++;
    arr.push(x);
  }

  ppp(arr, n);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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

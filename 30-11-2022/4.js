function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = input[line].trim().split(" ").map(Number);
    line++;
  }

  //------------------------------------------------------------------------------------------->

  let stack = [],
    queue = [];

  for (let i of arr) {
    if (i[0] === 1) {
      queue.push(i[1]);
    } else if (i[0] === 2) {
      stack.push(i[1]);
    } else if (i[0] === 3) {
      queue.length ? console.log(queue[0]) : console.log(-1);
    } else if (i[0] === 4) {
      stack.length ? console.log(stack[stack.length - 1]) : console.log(-1);
    } else {
       if(queue.length !== 0)  stack.push(queue.shift());
    }
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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

function balanced(str, n) {
  let stack = [],
    i = 0;

  while (i < n) {
    if (str[i] === str[i].toLowerCase()) {
      stack.push(str[i].toUpperCase());
    } else if (stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      console.log("False");
      return;
    }
    i++;
  }

  stack.length ? console.log("False") : console.log("True");
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let str = input[line].trim();
    line++;
    balanced(str, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`5
    2
    aA
    6
    aAbBcC
    2
    cD
    4
    caCA
    4
    daAD`);
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

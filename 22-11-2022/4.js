function classicalProblem(str) {
    let stack=[];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "[" || str[i] == "{" || str[i] == "(") {
      if (str[i] == "[") {
        stack.push("]");
      } else if (str[i] == "(") {
        stack.push(")");
      } else {
        stack.push("}");
      }
    } else {
      if (stack[stack.length - 1] === str[i]) {
        stack.pop();
      } else {
        console.log("not balanced");
        return;
      }
    }
  }

  stack.length == 0 ? console.log("balanced") : console.log("not balanced");
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line].trim();
    line++;
    classicalProblem(str);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`3
    {([])}
    ()
    ([]
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

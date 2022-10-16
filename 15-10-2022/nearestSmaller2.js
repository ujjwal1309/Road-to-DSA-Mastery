function smallerElement(arr, n) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1][0] < arr[i]) {
      stack.pop();
    }

    if (stack.length == 0) {
      ans += `${i + 1} `;
    } else {
      ans += `${i - stack[stack.length - 1][1]} `;
    }
    stack.push([arr[i],i])
  }
  console.log(ans)
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
    smallerElement(arr, n);
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

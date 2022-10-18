function validStackSequence(arr, arr2, n) {
  let stack = [];
  let i = 0,
    j = 0;
  while (i <= n && j < n) {
    while (stack.length && stack[stack.length - 1] < arr2[j]) {
      stack.push(arr[i]);
      i++;
    }

    if (stack.length == 0) {
      stack.push(arr[i]);
      i++;
    } else if (stack[stack.length - 1] == arr2[j]) {
      stack.pop();
      j++;
    }   
  }
  console.log(stack)
  if (stack.length == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    let arr2 = input[line].trim().split(" ").map(Number);
    line++;
    validStackSequence(arr, arr2, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    5
    1 2 3 4 5
    4 5 3 2 1
    5
    1 2 3 4 5
    4 3 5 1 2`);
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

function nextGreaterElement(arr, n) {
  let stack = [];
  let ans = [];
  let i = n - 1;
  while (i >= 0) {
    if (stack.length == 0) {
      ans.push(-1);
      stack.push(arr[i]);
      i--;
    } else if (stack[stack.length - 1] > arr[i]) {
      ans.push(stack[stack.length - 1]);
      stack.push(arr[i]);
      i--;
    } else {
      stack.pop();
    }
  }
  let bag="";
  for(let i=ans.length-1; i>=0; i--)
  {
    bag+=ans[i]+" "
  }
  console.log(bag);
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
    nextGreaterElement(arr, n);
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

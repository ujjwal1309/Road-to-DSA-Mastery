function truckKun(arr, n) {
  let stack = [];
  let i = 0;
  let order = 1;

  while (i < n) {
    while (stack.length && stack[stack.length - 1] === order) {
      stack.pop();
      order++;
    }
    arr[i] === order ? order++ : stack.push(arr[i]);
    i++;
  }

  while (stack.length && stack[stack.length - 1] === order) {
    stack.pop();
    order++;
  }

  stack.length ? console.log("no") : console.log("yes");
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let flag = true;
  for (let i = 0; flag; i = i + 2) {
    if (+input[i].trim() === 0) {
      flag = false;
      continue;
    }
    let n = +input[i];
    let arr = input[i + 1].trim().split(" ").map(Number);
    truckKun(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`5 
  5 3 2 1 4   
    0`);
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

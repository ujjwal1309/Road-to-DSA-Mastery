function truckKun(arr, n) {
  let e = 1;
  let stack = [];
  let flag = true;

  for (let i=0; i<=arr.length; i++) {
    console.log(stack);

    while (stack.length && stack[stack.length - 1] === e) {
      stack.pop();
      e++;
    }

    //------------------------------------------------------------------------------------------->

    // e == 5 ? (flag = false) : (flag = true);

    if (arr[i] == e) {
      e++;
    } else if (arr[i] > stack[stack.length - 1]) {
      console.log("no");
      return;
    } else {
      stack.push(arr[i]);
    }
  }
  stack.length == 0 ? console.log("yes") : console.log("ok");
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
  5 1 2 4 3 
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

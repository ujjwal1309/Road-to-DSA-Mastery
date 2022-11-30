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
  let arr2 = [];

  for (let i of arr) {
    if (i[0] === 2) {
      arr2.push(i[1]);
    }else{
        arr2.length ? console.log(arr2.pop()) : console.log('No Food');
    }
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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

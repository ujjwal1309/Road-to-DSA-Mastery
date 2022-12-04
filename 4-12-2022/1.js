function smallElement(arr, n) {
  let s = [];
  let ans = [];
  let i = 0;
  while (i < n) {
    while (s.length && s[s.length - 1] >= arr[i]) {
      s.pop();
    }

    !s.length ? ans.push(-1) : ans.push(s[s.length - 1]);

    s.push(arr[i]);
    i++;
  }

  console.log(ans);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  smallElement(arr, n);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`8
    39 27 11 4 24 32 32 1`);
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

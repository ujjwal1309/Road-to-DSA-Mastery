function nearestGreater(arr, n) {
  let ans = "";

  for (let i = 0; i < n; i++) {
    let count = 1;
    let j = i - 1;
    while (j >= 0 && arr[j] < arr[i]) {
      count++;
      j--;
    }
    ans += `${count} `;
  }

  console.log(ans);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    nearestGreater(arr, n);
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

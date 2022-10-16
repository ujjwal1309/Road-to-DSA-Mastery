function dailyTemprature(arr, n) {
  let ans = "";
  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    let count2 = 0;
    for (let j = i + 1; j < n; j++) {
      count++;
      if (arr[j] > arr[i]) {
        break;
      } else {
        count2++;
      }
    }
    if (count == count2) {
      ans += `0 `;
    } else {
      ans += `${count} `;
    }
  }
  ans += `0 `;
  console.log(ans);
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
    dailyTemprature(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    4
    30 40 50 60
    8
    73 74 75 71 69 72 76 73
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

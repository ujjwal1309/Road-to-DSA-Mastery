function spiralAndDiagonal(arr, n) {
    // console.log(arr);
  let sum = 0;
  let sum1=0
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
  }

  if (n % 2 !== 0) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i == Math.floor(n / 2)) {
          continue;
        }

        if (i + j == n - 1) {
          sum += arr[i][j];
        }
      }
    }
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i + j == n - 1) {
          sum += arr[i][j];
        }
      }
    }
  }
//   console.log(sum);
//   console.log(sum1);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let str = input[line].trim();
    line++;
    console.log(str)
    let arr = [];
    for (let j = 0; j < str.length; j = j + n + n) {
    //   let bag = "";
    //   for (let k = j; k < j + n + n - 1; k++) {
    //     bag += str[k];
    //   }
    //   arr.push(bag.split(" ").map(Number));
    console.log(str[j]);
    }
    // spiralAndDiagonal(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
  4
  1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10`);
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

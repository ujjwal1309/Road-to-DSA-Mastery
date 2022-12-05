function greater(arr, n) {
  let xs = [],
    x = [];
  let i = 0;
  while (i < n) {
    while (xs.length && arr[xs[xs.length - 1]] <= arr[i]) {
      xs.pop();
    }

    xs.length == 0 ? x.push(-1) : x.push(xs[xs.length - 1]);

    xs.push(i);
    i++;
  }

  let ys = [],
    y = [];
  let j = n - 1;
  while (j >= 0) {
    while (ys.length && arr[ys[ys.length - 1]] <= arr[j]) {
      ys.pop();
    }
    ys.length == 0 ? y.push(-1) : y.push(ys[ys.length - 1]);

    ys.push(j);
    j--;
  }

  y.reverse();

  let ans = [];

  for (let i in y) {
    if (x[i] == -1 && y[i] == -1) {
      ans.push(-1);
    } else if (x[i] == -1 && y[i] !== -1) {
      ans.push(arr[y[i]]);
    } else if (x[i] !== -1 && y[i] === -1) {
      ans.push(arr[x[i]]);
    } else if (Math.abs(x[i] - i) == Math.abs(y[i] - i)) {
      ans.push(arr[x[i]]);
    } else if (Math.abs(x[i] - i) < Math.abs(y[i] - i)) {
      ans.push(arr[x[i]]);
    } else {
      ans.push(arr[y[i]]);
    }
  }

  console.log(ans.join(" "));
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
    greater(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    3
    1 2 1
    5
    1 2 3 4 3`);
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

function nearestGreater(arr, n) {
  let xs = [],
    x = [];
  for (let i = 0; i < n; i++) {
    while (xs.length && arr[i] <= arr[xs[xs.length - 1]]) {
      xs.pop();
    }

    xs.length === 0 ? x.push(-1) : x.push(xs[xs.length - 1]);

    xs.push(i);
  }

  let ys = [],
    y = [];

  for (let i = n - 1; i >= 0; i--) {
    while (ys.length && arr[i] <= arr[ys[ys.length - 1]]) {
      ys.pop();
    }

    ys.length == 0 ? y.push(-1) : y.push(ys[ys.length - 1]);

    ys.push(i);
  }

  y.reverse();
  let ans = [];

  for (let i in arr) {
    if (x[i] === -1 && y[i] !== -1) {
      ans.push(arr[y[i]]);
    } else if (x[i] !== -1 && y[i] === -1) {
      ans.push(arr[x[i]]);
    } else if (x[i] === -1 && y[i] === -1) {
      ans.push(-1);
    }else if(Math.abs(y[i]-i)==Math.abs(x[i]-i)){
        ans.push(arr[x[i]]);
    }else if(Math.abs(y[i]-i)>Math.abs(x[i]-i)){
        ans.push(arr[x[i]]);
    }else{
        ans.push(arr[y[i]])
    }
  }

  console.log(ans.join(' '));
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
  8
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

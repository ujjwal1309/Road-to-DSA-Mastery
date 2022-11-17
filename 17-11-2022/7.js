function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let xs = [],
    x = [],
    i = 0;
  while (i < n) {
    while (xs.length && arr[i] >= arr[xs[xs.length - 1] - 1]) {
      xs.pop();
    }

    if (xs.length == 0) {
      xs.push(i + 1);
      x.push(-1);
    } else if (arr[i] < arr[xs[xs.length - 1] - 1]) {
      x.push(xs[xs.length - 1]);
      xs.push(i + 1);
    }
    i++;
  }


  let ys = [],
    y = [],
    j = n - 1;

  while (j >= 0) {
    while (ys.length && arr[j] >= arr[ys[ys.length - 1] - 1]) {
      ys.pop();
    }

    if (ys.length == 0) {
      ys.push(j + 1);
      y.push(-1);
    } else if (arr[j] < arr[ys[ys.length - 1] - 1]) {
      y.push(ys[ys.length - 1]);
      ys.push(j + 1);
    }
    j--
  }

  y.reverse();

  let sum=[];

  for(let i=0; i<n; i++)
  {
    sum.push(x[i]+y[i]);
  }

  console.log(sum.join(' '));
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`5
     5 4 1 3 2`);
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

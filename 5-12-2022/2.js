function droppingBall(arr, ball, n, m, k) {
  let ans = "";
  for (let i of ball) {
    if (i === 1) {
      let r = 0,
        c = 0;
      if (arr[r][c] === 1) {
        c++;
      } else if (arr[r][c] === 2) {
        r++;
      } else {
        c--;
      }

      ans += arr[r][c];
    } else if (i === 2) {
      let r = 0,
        c = 1;
      if (arr[r][c] === 1) {
        c++;
      } else if (arr[r][c] === 2) {
        r++;
      } else {
        c--;
      }

      ans += arr[r][c];
    } else if (i === 3) {
      let r = 0,
        c = 2;
      if (arr[r][c] === 1) {
        c++;
      } else if (arr[r][c] === 2) {
        r++;
      } else {
        c--;
      }

      ans += arr[r][c];
    } else if (i === 4) {
      let r = 0,
        c = 3;
      if (arr[r][c] === 1) {
        c++;
      } else if (arr[r][c] === 2) {
        r++;
      } else {
        c--;
      }

      ans += arr[r][c];
    } else if (i === 5) {
      let r = 0,
        c = 4;
      if (arr[r][c] === 1) {
        c++;
      } else if (arr[r][c] === 2) {
        r++;
      } else {
        c--;
      }

      ans += arr[r][c];
    }
  }

  console.log(ans);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line].trim().split(" ").map(Number);
    line++;
    let n = x[0],
      m = x[1],
      k = [2];
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = input[line].trim().split(" ").map(Number);
      line++;
    }
    let ball = input[line].trim().split(" ").map(Number);
    line++;

    droppingBall(arr, ball, n, m, k);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
5 5 3
1 2 3 3 3
2 2 2 2 2
2 2 2 2 2
2 2 2 2 2
2 2 2 2 2
1 2 1
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

function countIsland(arr, n, m) {
  let s = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] != 1) continue;

      s.push([i, j]);

      arr[i][j]=-1;


      while (s.length) {
        let island = s[s.length - 1];

        let r = island[0],c = island[1] + 1;

        while (r < n && r >= 0 && c < m && c >= 0 && arr[r][c] == 1) {
          arr[r][c] = -1;
          c++;
        }

        if (!s[s.length - 1].includes(r) || !s[s.length - 1].includes(c)) s.push([r, c]);

        (r = island[0]), (c = island[1] - 1);

        while (r < n && r >= 0 && c < m && c >= 0 && arr[r][c] == 1) {
          arr[r][c] = -1;
          c--;
        }

        if (!s[s.length - 1].includes(r) || !s[s.length - 1].includes(c)) s.push([r, c]);

        (r = island[0] + 1), (c = island[1]);

        while (r < n && r >= 0 && c < m && c >= 0 && arr[r][c] == 1) {
          arr[r][c] = -1;
          r++;
        }

        if (!s[s.length - 1].includes(r) || !s[s.length - 1].includes(c)) s.push([r, c]);

        (r = island[0] - 1), (c = island[1]);

        while (r < n && r >= 0 && c < m && c >= 0 && arr[r][c] == 1) {
          arr[r][c] = -1;
          r--;
        }

        if (!s[s.length - 1].includes(r) || !s[s.length - 1].includes(c)) s.push([r, c]);

          

        s.pop();
      }

      count++;
    }
  }

  console.log(count);
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
      m = x[1];
    let arr = new Array(n);
    for (let j = 0; j < n; j++) {
      arr[j] = input[line].trim().split(" ").map(Number);
      line++;
    }
    countIsland(arr, n, m);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`2
    4 5
    1 1 1 1 0
    1 1 0 1 0
    1 1 0 0 0
    0 0 0 0 0
    3 3
    1 1 1
    0 0 0
    1 1 1`);
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

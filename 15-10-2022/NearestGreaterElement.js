function nearestGreater(arr, n) {
  let l = [];
  let r = [];

  l.push(-1);
  for (let i = 1; i < n; i++) {
    let count = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        l.push(j);
        count++;
        break;
      }
    }
    if (count == 0) {
      l.push(-1);
    }
  }

  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        r.push(j);
        count++;
        break;
      }
    }
    if (count == 0) {
      r.push(-1);
    }
  }
  r.push(-1);
  let ans = "";

  for (let i = 0; i < arr.length; i++) {
    if (l[i] == -1 && r[i] == -1) {
      ans += `-1 `;
    } else if (l[i] == -1) {
      ans += `${arr[r[i]]} `;
    } else if (r[i] == -1) {
      ans += `${arr[l[i]]} `;
    } else if (Math.abs(l[i]-i) > Math.abs(r[i]-i)) {
      ans += `${arr[r[i]]} `;
    } else if (Math.abs(l[i]-i) < Math.abs(r[i]-i)) {
      ans += `${arr[l[i]]} `;
    } else {
      ans += `${arr[l[i]]} `;
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
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    nearestGreater(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`3
  7
  3 5 4 9 3 6 3
  1
  5
  2
  9 4 `);
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

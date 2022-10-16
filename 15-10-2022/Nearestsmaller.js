function smallerElement(arr, n) {
  let s1 = [];
  let l = [];
  let i = 0;
  while (i < n) {
    if (s1.length == 0) {
      l.push(-1);
      s1.push(i);
      i++;
    } else if (arr[s1[s1.length - 1]] < arr[i]) {
      l.push(s1[s1.length - 1]);
      s1.push(i);
      i++;
    } else {
      s1.pop();
    }
  }

  let s2 = [];
  let r = [];
  let j = n - 1;
  while (j >= 0) {
    if (s2.length == 0) {
      r.push(-1);
      s2.push(j);
      j--;
    } else if (arr[s2[s2.length - 1]] < arr[j]) {
      r.push(s2[s2.length - 1]);
      s2.push(j);
      j--;
    } else {
      s2.pop();
    }
  }
  r.reverse();
  let ans = "";
  let k = 0;
  while (k < n) {
    if (l[k] == -1 && r[k] == -1 && k < n) {
      ans += `-1 `;
      k++;
    }

    if (l[k] == -1 && k < n) {
      ans += `${arr[r[k]]} `;
      k++;
    }
    if (r[k] == -1 && k < n) {
      ans += `${arr[l[k]]} `;
      k++;
    }
    if (Math.abs(l[k] - k) > Math.abs(r[k] - k) && k < n) {
      ans += `${arr[r[k]]} `;
      k++;
    }
    if (Math.abs(l[k] - k) < Math.abs(r[k] - k) && k < n) {
      ans += `${arr[l[k]]} `;
      k++;
    }
    if (Math.abs(l[k] - k) == Math.abs(r[k] - k) && k < n) {
      ans += `${arr[l[k]]} `;
      k++;
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
    smallerElement(arr, n);
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

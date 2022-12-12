function spiralTraversal(arr, n) {
  let d = 0,
    r = n - 1,
    l = 0,
    u = n - 1;

  let ans = "";

  for (let i = 0; i < Math.ceil(n / 2); i++) {
    for (let i = l; i <= r; i++) {
      ans += arr[i][d] + " ";
    }
    d++;
    for(let i=d; i<=u; i++){
        ans+=arr[r][i]+' ';
    }
    r--;
    for(let i=r; i>=l; i--){
        ans+=arr[i][u]+' ';
    }
    u--;
    for(let i=u; i>=d; i--){
        ans+=arr[l][i]+' ';
    }
    l++;
  }

  console.log(ans)
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = input[line].trim().split(" ").map(Number);
      line++;
    }
    spiralTraversal(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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

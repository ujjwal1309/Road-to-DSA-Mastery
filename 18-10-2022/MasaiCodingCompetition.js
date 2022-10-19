function codingCompetition(arr, n) {
  let queue = [];
  let one = [],
    two = [],
    three = [],
    four = [];
  for (let i = 0; i <= n; i++) {
    if (arr[i][0] === "E") {
      if (+arr[i][1] === 1) {
        queue.push(1);
        one.push(+arr[i][2]);
      }
      if (+arr[i][1] === 2) {
        queue.push(2);
        two.push(+arr[i][2]);
      }
      if (+arr[i][1] === 3) {
        queue.push(3);
        three.push(+arr[i][2]);
      }
      if (+arr[i][1] === 4) {
        queue.push(4);
        four.push(+arr[i][2]);
      }
    } else {
      if (queue[0] == 1) {
        if (one.length == 0) {
            queue.shift()
        }
        else{
            console.log(1,one.shift())
        }
      }
      if (queue[0] == 2) {
        if (two.length == 0) {
            queue.shift()
        }
        else{
            console.log(2,two.shift())
        }
      }
      if (queue[0] == 3) {
        if (three.length == 0) {
            queue.shift()
        }
        else{
            console.log(3,three.shift())
        }
      }
      if (queue[0] == 4) {
        if (four.length == 0) {
            queue.shift()
        }
        else{
            console.log(4,four.shift())
        }
      }
    }
  }
  console.log(queue)
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = new Array(n);
  let line = 1;
  for (let i = 0; i < n; i++) {
    arr[i] = input[line].trim().split(" ");
    line++;
  }
  codingCompetition(arr, n);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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


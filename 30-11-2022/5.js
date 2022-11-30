function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = input[line].trim().split(" ");
    line++;
  }

  //------------------------------------------------------------------------------------------->

  let q = [];
  let q1 = [],
    q2 = [],
    q3 = [],
    q4 = [];

 //------------------------------------------------------------------------------------------->

  for (let i of arr) {
    if (i[0] === "E") {
      if (i[1] === "1") {
        if (q1.length) {
          q1.push(+i[2]);
        } else {
          q.push(1);
          q1.push(+i[2]);
        }

    //------------------------------------------------------------------------------------------->

      } else if (i[1] === "2") {
        if (q2.length) {
          q2.push(+i[2]);
        } else {
          q.push(2);
          q2.push(+i[2]);
        }
 //------------------------------------------------------------------------------------------->

      } else if (i[1] === "3") {
        if (q3.length) {
          q3.push(+i[2]);
        } else {
          q.push(3);
          q3.push(+i[2]);
        }

    //------------------------------------------------------------------------------------------->

      } else {
        if (q4.length) {
          q4.push(+i[2]);
        } else {
          q.push(4);
          q4.push(+i[2]);
        }
      }
    } else {
      if (q[0] === 1) {
        console.log(1, q1.shift());
        if (q1.length === 0) q.shift();
      } else if (q[0] === 2) {
        console.log(2, q2.shift());
        if (q2.length === 0) q.shift();
      } else if (q[0] === 3) {
        console.log(3, q3.shift());
        if (q3.length === 0) q.shift();
      }else{
        console.log(4, q4.shift());
        if (q4.length === 0) q.shift();
      }
    }
  }
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

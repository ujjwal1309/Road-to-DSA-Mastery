function runProgram(input) {
    // Write code here
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`5
    2
    aA
    6
    aAbBcC
    2
    cD
    4
    caCA
    4
    daAD`);
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
      process.exit(0) ;
    });
  }
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let x=input[0].trim().split(" ").map(Number);
    let n=x[0];
    let m=x[1];
    let arr=new Array(n);
    let line=1;
    for(let i=0; i<arr.length; i++)
    {
       arr[i]=input[line].trim().split(" ").map(Number);
       line++
    }
    console.log(arr);
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3 2
    1 0
    0 1
    1 1`);
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
function runProgram(input) {
    // Write code here
    input=input.trim();
    let str=input;
    let ans='';
    for(let i=str.length-1; i>=0; i--){
        ans+=str[i];
    }

    console.log(ans);
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`masaischool`);
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
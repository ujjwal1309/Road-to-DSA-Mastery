function reverseSting(str){
    let ans='';
    for(let i=str.length-1; i>=0; i--)
    {
        ans+=str[i];
    }
    console.log(ans);
}

function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
    {
        let str=input[line].trim();
        line++;
        reverseSting(str);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    ab
    cd
    ef`);
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
function runProgram(input) {
    // Write code here
    input=input.trim();
    let str=input;
    let ans="";
    let i=0;
    while(i<str.length-1)
    {
        if(str[i]!==str[i+1])
        {
            ans+=str[i]+str[i+1];
            
        }
        i=i+2;
    }
    if(str.length%2==1)
    {
      ans+=str[str.length-1];
    }
    console.log(ans);
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`aaabccddd`);
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
function runProgram(input) {
    // Write code here
    input=input.trim();
    let obj={};
    for(let i=0; i<input.length; i++)
    {
        if(input[i]==" ")
        {
            continue;
        }
        else{
            obj[input[i]]=1;
        }
    }

    let ans=""

    for(let key in obj)
    {
       ans+=key;
    }

    console.log(ans);
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`aaaabbbbbcccccdddd`);
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
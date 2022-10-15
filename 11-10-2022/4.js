function runProgram(input) {
    // Write code here
    input=input.trim();
    let str=input;
    let n=str.length;
    let i=0;
    let stack=[];
    while(i<n)
    {
        if(stack.length===0)
        {
            stack.push(str[i]);
        }
        else if(stack[stack.length-1]==str[i])
        {
            stack.pop()
        }
        else{
            stack.push(str[i]);
        }
        i++;
    }

    console.log(stack.join(''))

   
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
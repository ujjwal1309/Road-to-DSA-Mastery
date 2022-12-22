function runProgram(input) {
    // Write code here
    input=input.trim();
    let str=input;
    let s=[];

    for(let i=0; i<str.length; i++)
    {
        if(s.length && str[i]===s[s.length-1])
        {
            s.pop();
        }else{
            s.push(str[i]);
        }
    }

    !s.length ? console.log('Empty String') : console.log(s.join(''));
   
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
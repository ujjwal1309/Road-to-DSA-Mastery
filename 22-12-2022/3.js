function runProgram(input) {
    // Write code here
    input=input.trim();
    let str=input;

    let s=[];

    for(let i=0; i<str.length; i++)
    {
        if(str[i]=="(" || str[i]=="[" || str[i]=="{")
        {
            if(str[i]=="(")
            {
                s.push(')')
            }else if(str[i]=="["){
                s.push(']')

            }else{
                s.push('}')
            }
        }else if(str[i]==")" || str[i]=="]" || str[i]=="}"){
            if(str[i]===s[s.length-1]){
                s.pop()
            }else{
                console.log('unbalanced')
                return
            }
        }
    }

    !s.length ? console.log('balanced') : console.log('unbalanced');
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`(((((((((()))]))))))`);
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
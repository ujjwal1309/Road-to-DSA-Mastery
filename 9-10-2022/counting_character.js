function countCharacters(str,n)
{
    let lower_case="abcdefghijklmnopqrstuvwxyz";
    let obj={};
    for(let i=0; i<lower_case.length; i++)
    {
        obj[lower_case[i]]=0;
    }
    
    for(let i=0; i<n; i++)
    {
        if(obj[str[i]]!=undefined)
        {
            obj[str[i]]++;
        }
    }

    let ans="";
    for(let key in obj)
    {
        ans+=obj[key]+" ";
    }
    console.log(ans);
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
    {
        let n=+input[line];
        line++;
        let str=input[line].trim();
        line++;
        countCharacters(str,n);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    5
    aeiou
    6
    aaeiou`);
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
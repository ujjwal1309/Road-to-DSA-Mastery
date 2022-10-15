function substringGame(str,n)
{
    let count=0;
    for(let i=0; i<n; i++)
    {
        let sub="";
        for(let j=i; j<n; j++)
        {
            sub+=str[j];
            if(check(sub))
            {
                count++
            }
        }
    }
    console.log(count)
}

let check=(str)=>{
   let count=0;
   for(let i=0; i<str.length-1; i++)
   {
    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u")
    {
       if(str[i+1]=="a" || str[i+1]=="e" || str[i+1]=="i" || str[i+1]=="o" || str[i+1]=="u" )
       {
        count++;
       }
    }
   }
   if(count>0)
   {
    return true;
   }

   return false;
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let str=input[1].trim();
    substringGame(str,n);
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`4
    cdea`);
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
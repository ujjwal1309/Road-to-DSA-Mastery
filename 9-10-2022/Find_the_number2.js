function findNumber(arr,n)
{

    let obj={};
    for(let i=0; i<n; i++)
    {
        obj[arr[i]]=0;
    }
    
    let inv=new Array(n);
    for(let i=0; i<n; i++)
    {
        inv[i]=arr[i]*-1;
        if(obj[inv[i]]!=undefined)
        {
            obj[inv[i]]++
        }
    }

    let max=-Infinity;
    let ans=-1
    for(let key in obj)
    {
        if(obj[key]>0 && max<+key)
        {
            max=+key;
            ans=+key;
        }
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
        let arr=input[line].trim().split(" ").map(Number);
        line++;
        findNumber(arr,n);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    6
    4 5 -1 4 8 -8
    5
    2 4 -5 6 -1`);
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
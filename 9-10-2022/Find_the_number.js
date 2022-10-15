function findNumber(arr,n)
{
    let inv=[];
    for(let i=0; i<n; i++)
    {
        inv.push(arr[i]*-1);
    }
    
    let max=-Infinity;
    let ans=-1;
    for(let i=0; i<n; i++)
    {
        let count=0;
        for(let j=0; j<n; j++)
        {
            if(arr[i]==inv[j])
            {
                count++;
            }
        }
        if(count>0 && max<arr[i])
        {
           max=arr[i];
           ans=arr[i];
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
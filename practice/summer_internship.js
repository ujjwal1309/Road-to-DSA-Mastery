function muffinChange(arr,N)
{
   let bill_5=0;
   let bill_10=0;
   for(let i=0; i<N; i++)
   {
    if(arr[i]==5)
    {
        bill_5++;
    }
    if(arr[i]==10)
    {
        bill_5--;
        bill_10++;
    }
    if(arr[i]==20)
    {
        bill_5--;
        bill_10--;
    }
   }
   if(bill_10>=0 && bill_5>=0)
   {
     console.log("YES");
   }
   else{
    console.log("NO");
   }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
    {
        let N=+input[line];
        line++
        let arr=input[line].trim().split(" ").map(Number);
        line++
        muffinChange(arr,N);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    5
    5 5 5 10 20
    5
    5 5 10 10 20`);
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
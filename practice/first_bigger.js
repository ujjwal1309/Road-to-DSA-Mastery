function firstBigger(arr,n,k)
{
  let min=Infinity;
  for(let i=0; i<n; i++)
  {
    if(arr[i]>k && min>arr[i])
    {
        min=arr[i];
    }
  }
  console.log(min);
}


function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    let tc=+input[2];
    let line=3;
    for(let i=0; i<tc; i++)
    {
        let k=+input[line];
        line++;
        firstBigger(arr,N,k);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`10
    13 89 81 66 81 63 71 76 73 81
    2
    65
    15`);
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
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
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    let q=+input[2];
    for(let i=0; i<q; i++)
    {
        let k=+input[3+i];
        firstBigger(arr,n,k);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`10
    13 89 81 66 81 63 71 76 73 81
    2
    65
    15
    `);
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
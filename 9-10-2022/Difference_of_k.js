let diffetrenceOfK=(arr,n,k)=>{
    let i=0,j=n-1;
    while(i<j)
    {
        let diff=Math.abs(arr[i]-arr[j])
        
        if(diff==k)
        {
            console.log("Yes");
            return;
        }
        else if(diff<k)
        {
            i++;
        }
        else
        {
            j--;
        }
    }

    console.log("No")
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
    {
        let x=input[line].trim().split(" ").map(Number);
        line++;
        let n=x[0],k=x[1];
        let arr=input[line].trim().split(" ").map(Number);
        line++;
        diffetrenceOfK(arr,n,k);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
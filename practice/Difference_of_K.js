function DifferenceOfK(arr,N,K)
{
    for(let i=0,j=N-1;i<j;)
    {
        var diff=arr[j]-arr[i];
        if(diff==K)
        {
            return "Yes";
        }
        else if(diff>K)
        {
            i++;
        }
        else
        {
            j--;
        }
    }
    return "No";
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(let i=0; i<tc; i++)
    {
        var x=input[line].trim().split(" ").map(Number);
        var N=x[0];
        var K=x[1];
        line++;
        var arr=input[line].trim().split(" ").map(Number);
        line++
        console.log(DifferenceOfK(arr,N,K));
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
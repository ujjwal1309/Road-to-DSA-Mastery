function rotateTheMatrix(arr,n)
{
    for(var i=n-1; i>=0; i--)
    {
        var ans="";
        for(j=n-1; j>=0; j--)
        {
            ans+=arr[i][j]+" ";
        }
        console.log(ans);

    }

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0; i<tc; i++)
    {
        var n=+input[line]
        line++;
        var arr=new Array(n)
        for(var j=0; j<n; j++)
        {
            arr[j]=input[line].trim().split(" ").map(Number);
            line++;
        }
        rotateTheMatrix(arr,n)
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    3 
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    9 0 1 2
    3 4 5 6`);
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
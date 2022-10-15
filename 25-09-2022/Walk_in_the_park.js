function walkInThePark(arr,n,m)
{
    var i=0,j=0;
    var count=0;
    // return arr
    while(i<n && i>=0 && j<m && j>=0)
    {
        if(arr[i][j]==1)
        {
            return count;
        }
        else if(arr[i][j]=="R")
        {
            arr[i][j]=1;
            j++
        }
        else if(arr[i][j]=="L")
        {
            arr[i][j]=1;
            j--;
        }
        else if(arr[i][j]=="U")
        {
            arr[i][j]=1;
            i--;
        }
        else if(arr[i][j]=="D")
        {
            arr[i][j]=1;
            i++;
        }
        count++;
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0; i<tc; i++)
    {
        var x=input[line].trim().split(" ").map(Number);
        var n=x[0],m=x[1];
        line++;
        var arr=new Array(n);
        for(var j=0; j<n; j++)
        {
            arr[j]=input[line].trim().split("");
            line++;
        }
        console.log(walkInThePark(arr,n,m))
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
    3 4
    RRDR
    LLUD
    LLLL
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
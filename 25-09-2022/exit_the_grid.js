function mazeRunner(arr,n)
{
    var i=0,j=0;
    var count=0;
    while(i<n && i>=0 && j<n && j>=0)
    {
        if(arr[i][j]==0)
        {
            return 0;
        }
        else if(arr[i][j]=="R")
        {
            arr[i][j]=0;
            j++;
        }
        else if(arr[i][j]=="L")
        {
            arr[i][j]=0;
            j--;
        }
        else if(arr[i][j]=="U")
        {
            arr[i][j]=0;
            i--;
        }
        else if(arr[i][j]=="D")
        {
            arr[i][j]=0;
            i++;
        }
        count++;
    }
    return count;
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
        var arr=new Array(n);
        for(j=0; j<n; j++)
        {
            arr[j]=input[line].trim().split("");
            line++;
        }
        console.log(mazeRunner(arr,n));
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    4 
    RRRR
    LLLL
    UUUU
    DDDD
    3
    LRL
    UUU
    DLR
    2
    RL
    DD
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
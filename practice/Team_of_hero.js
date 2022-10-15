function TeamOfHeroes(arr,N,K)
{
    for(let i=0, j=N-1; i<j;)
    {
        var sum=arr[i]+arr[j];

        if(sum==K)
        {
            return "Yes";
        }
        else if(sum>K)
        {
            j--;
        }
        else
        {
            i++;
        }
    }
    return "No";

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0; i<tc; i++)
    {
        var x=input[line].trim().split(" ").map(Number);
        var N=x[0];
        var K=x[1];
        line++;
        var arr=input[line].trim().split(" ").map(Number);
        line++;
        console.log(TeamOfHeroes(arr,N,K));
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    5 31
    10 11 13 17 21
    5 44
    10 11 13 17 21`);
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
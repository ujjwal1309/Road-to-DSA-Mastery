function matrixRows(arr,n,m)
{
    let sum="";
    // return arr;
    for(let i=0; i<n; i++)
    {
        let ans="";
        if(i%2==0)
        {
        for(let j=0; j<m; j++)
        {
            ans+=arr[i][j]+" ";
            
        }
        }
        // return ans;
        sum+="\n"+ans;
    }
    return sum;

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let x=input[0].trim().split(" ").map(Number);
    let n=x[0];
    let m=x[1];
    let line=1;
    let arr=new Array(n);
    for(let i=0; i<n; i++)
    {
        arr[i]=input[line].trim().split(" ").map(Number);
        line++
    }
    console.log(matrixRows(arr,n,m));

   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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
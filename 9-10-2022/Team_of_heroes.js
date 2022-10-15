let TeamOfHeroes=(arr,n,k) => {
    let i=0,j=n-1;
    while(i<j)
    {
        let sum=arr[i]+arr[j];
        if(sum==k)
        {
            console.log("Yes");
            return;
        }
        else if(sum<k)
        {
            i++;
        }
        else{
            j--;
        }
    }
    console.log("No");
    return;
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
    {
        let x=input[line].trim().split(" ").map(Number);
        let n=x[0],k=x[1];
        line++;
        let arr=input[line].trim().split(" ").map(Number);
        line++;
        TeamOfHeroes(arr,n,k);
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
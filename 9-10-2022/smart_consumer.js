function smartConsumer(arr,n,x,y){
    let tp=0;
    for(let i=0; i<n; i++)
    {
        tp+=arr[i];
    }

    let dp=0;
    for(let i=0; i<n; i++)
    {
        if(arr[i]<y)
        {
            dp+=0;
        }
        else
        {
            dp+=(arr[i]-y)
        }
    }

    let ad=dp+x;
    if(tp>ad)
    {
        console.log("YES")
    }
    else
    {
        console.log("NO");
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    let tc=+input[0];
    let line=1
    for(let i=0; i<tc; i++)
    {
       let a=input[line].trim().split(" ").map(Number);
       let n=a[0],x=a[1],y=a[2];
       line++;
       let arr=input[line].trim().split(" ").map(Number);
       line++
       smartConsumer(arr,n,x,y);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    4 30 10
    15 8 22 6
    4 40 10
    15 8 22 6
    4 34 10
    15 8 22 6`);
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
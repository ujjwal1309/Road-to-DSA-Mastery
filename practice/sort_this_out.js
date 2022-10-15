function sortTheArray(arr,n)
{
    var index=new Array(n);
    for(var i=0; i<n; i++)
    {
        index[i]=i;
    }
    
    for(var i=0; i<n-1; i++)
    {
        for(var j=0; j<n-i-1; j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp

                var temp2=index[j];
                index[j]=index[j+1];
                index[j+1]=temp2;
            }
        }
    }
    return index
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    console.log(sortTheArray(arr,n));
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`5
    4 5 3 7 1`);
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
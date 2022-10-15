function TwoSortedArray(arr,arr2,n)
{
    let count=0;
    for(let i=0,j=n-1;i<n && j>=0;)
    {
        if(arr[i]==arr2[j])
        {
            count++;
            i++;
            j--;
        }
        else{
            i++;
            j--;
        }
    }
    console.log(count);
}


function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(let i=0; i<tc; i++)
    {
        var N=+input[line];
        line++;
        var arr=input[line].trim().split(" ").map(Number);
        line++;
        var arr2=input[line].trim().split(" ").map(Number);
        line++;
        TwoSortedArray(arr,arr2,N);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
function twoSortedArray(arr,arr2,n)
{
    let count=0;
    let i=0,j=n-1;
    while(i<n && j>=0)
    {
        if(arr[i]==arr2[j])
        {
            count++;
            i++;
            j--;
        }
        else if(arr[i]>arr2[j])
        {
            j--;
        }
        else{
            i++;
        }
    }
    console.log(count);
}


function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
    {
        let n=+input[line];
        line++;
        let arr=input[line].trim().split(" ").map(Number);
        line++;
        let arr2=input[line].trim().split(" ").map(Number);
        line++;
        twoSortedArray(arr,arr2,n)

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
function smallerNeighbourElement(arr,n)
{
    let stack=[];
    let ans=[];
    let i=0;
    while(i<n)
    {
        if(stack.length==0)
        {
            ans.push(-1);
            stack.push(arr[i]);
            i++;
        }
        else if(stack[stack.length-1]<arr[i])
        {
            ans.push(stack[stack.length-1])
            stack.push(arr[i]);
            i++;
        }
        else{
            stack.pop();
        }
    }

    console.log(ans.join(' '));
}

function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let n=+input[0];
    let arr=input[1].trim().split(' ').map(Number);
    smallerNeighbourElement(arr,n)
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
function pushPopPeek(arr){
    let stack=[];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i][0]==1)
        {
         stack.push(arr[i][1]);
        }
        if(arr[i]==2)
        {
            stack.pop();
        }
        if(arr[i]==3)
        {
            if(stack.length==0)
            {
                console.log('empty');
            }
            else{
                console.log(stack[stack.length-1]);
            }
        }
    }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  let arr = [];
  for (let i = 0; i < tc; i++) {
    let x = input[line].trim().split(" ").map(Number);
    line++;
    arr.push(x);
  }
  pushPopPeek(arr)
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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
    process.exit(0);
  });
}

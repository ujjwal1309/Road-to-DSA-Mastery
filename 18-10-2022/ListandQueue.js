function listAndQueue(arr,n){
    let queue=[];
   for(let i=0; i<n; i++){
    if(arr[i][0]==="E")
    {
        queue.push(+arr[i][1]);
    }
    else{
        if(queue.length==0)
        {
            console.log('Empty')
        }
        else{
            console.log(queue.shift())
        }
    }
   }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = new Array(n);
  let line = 1;
  for (let i = 0; i < n; i++) {
    arr[i] = input[line].trim().split(" ");
    line++;
  }
  listAndQueue(arr,n)
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`4
    E 2
    E 3
    D
    D`);
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


function repeat(arr, n) {
    let obj={};
    for(let i=1; i<=n; i++){
        obj[i]=0;
    }

    for(let i=0; i<n; i++)
    {
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=0;
        }
        else{
            obj[arr[i]]++;
        }
    }

    let miss,rep;

    for(let keys in obj)
    {
        if(obj[keys]==0){
            miss=keys
        }

        if(obj[keys]>1)
        {
            rep=keys;
        }
    }

    let ans=miss+' '+rep
    console.log(ans)
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    repeat(arr, n);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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

function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let n=+input[0];
    let arr=[];
    let line=1;
    for(let i=0; i<n; i++){
        arr.push(input[line].trim().split(' '));
        line++
    }

    let ans=[];

    for(let i of arr){
        if(i[0]=="E"){
            ans.push(+i[1]);
            console.log(ans.length)
        }else{
            if(ans.length==0){
                console.log(-1,ans.length)
            }else 
            {
                console.log(ans.shift(),ans.length)
            }
        }
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`5
    E 2
    D
    D
    E 3
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
      process.exit(0) ;
    });
  }
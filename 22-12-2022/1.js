function pushPopTop(arr,n){
    let stack=[];
    for(let i of arr){
        if(i[0]===1){
            stack.push(i[1]);
        }else if(i[0]===2){
            if(stack.length){
                stack.pop()
            }            
        }else{
            !stack.length ? console.log('Empty!') : console.log(stack[stack.length-1]);
        }
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let n=+input[0];
    let line=1;
    let arr=new Array(n);
    for(let i=0; i<n; i++){
        arr[i]=input[line].trim().split(' ').map(Number);
        line++;
    }

    pushPopTop(arr,n)   
  }
  if (process.env.USERNAME=== "ujjwa") {
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
      process.exit(0) ;
    });
  }
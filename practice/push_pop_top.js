let top=-1;
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
   
    let arr=new Array(tc);

    for(i=1; i<=tc; i++)
    {
        let a,d;
       if(input[i][1]!==undefined)
       {
         x=input[i].trim().split(" ").map(Number);
         a=x[0],d=x[1];
       }
       else{
         a=+input[i];
       }

       if(a==1)
       {
        push(arr,d,tc);
       }
       else if(a==2)
       {
          pop();
       }
       else{
        peek(arr);
       }
    }
    
   
  }

function push(arr,data,n){

    if(top==n-1)
    {
        return
    }

    arr[++top]=data;
   
}

function pop(){
    if(top==-1)
    {
        return;
    }

    top--;
}

function peek(arr){
    if(top==-1)
    {
        console.log("Empty!");
        return;
    }

    console.log(arr[top]);
    return;
}

  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    2
    3
    1 3`);
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
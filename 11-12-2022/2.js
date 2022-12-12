function gamblingAddict(arr,n){
    let s=[];
    let i=n-1;
    let ans=new Array(n);

    while(i>=0){

        let count=1

        while(s.length && arr[s[s.length-1]]<=arr[i]){
            count+=ans[s[s.length-1]];
            s.pop();
        }

        !s.length ? ans[i]=0 : ans[i]=count;

        s.push(i);
        i--;

    }

    console.log(ans.join(' '));

}

function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let n=input[line];
        line++;
        let arr=input[line].trim().split(' ').map(Number);
        line++;
        gamblingAddict(arr,n);
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    8
    73 74 75 71 69 72 76 73
    4
    30 40 50 60
    3
    30 60 90`);
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
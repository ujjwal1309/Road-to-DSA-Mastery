function subsequenceCheck(str,str2,n,m){
    let s=[];
    for(let i=n-1; i>=0; i--){
        s.push(str[i]);
    }
    
    for(let i=0; i<m; i++){
        if(str2[i]===s[s.length-1]){
            s.pop();
        }
    }

    !s.length ? console.log('YES') : console.log('NO'); 
}

function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let x=input[0].trim().split(' ').map(Number);
    let n=x[0],m=x[1];
    let str=input[1].trim();
    let str2=input[2].trim();

    subsequenceCheck(str,str2,n,m);
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`5 7
    aaacc
    abaccac`);
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
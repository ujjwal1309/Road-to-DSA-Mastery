function runProgram(input) {
    // Write code here
    input=input.trim();
    let str=input;
    let obj={};
    for(let i=0; i<str.length; i++){

        if(str[i]==" ") continue;

        if(!obj[str[i]]){
            obj[str[i]]=1;

        }else{
            obj[str[i]]++;
        }
    }


    for(let key in obj){
        if(obj[key]>1) continue;

        if(obj[key]==1){
            console.log(key);
            return;
        }
    }

    console.log('Not Found');
    return;
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`rac ecars`);
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
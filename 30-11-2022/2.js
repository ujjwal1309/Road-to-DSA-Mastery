function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let line = 1;
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = input[line].trim().split(" ");
      line++;
    }

    //------------------------------------------------------------------------------------------->

    let arr2=[];

    for(let i of arr){
        if(i[0]=="E"){
            arr2.push(+i[1]);
        }else{
            arr2.length ? console.log(arr2.shift()) : console.log('Empty');
        }
    }



    //Empty
   
  }
  if (process.env.USERNAME=== "ujjwa") {
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
      process.exit(0) ;
    });
  }
function MikeRevenge(n,arr,q,qrr)
{
    console.log(arr,qrr)

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    // console.log(input)
    var x=input[0].trim().split(" ").map(Number);
    var n=x[0], q=x[1];
    var line=1;
    var arr=input[line].trim().split(" ").map(Number);
    line++;
    var qrr=new Array(q)
    for(let i=0; i<qrr.length; i++)
    {
        qrr[i]=input[line].trim().split(" ").map(Number);
        line++;
    }
    MikeRevenge(n,arr,q,qrr);


   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`5 5
    1 2 3 4 5
    1 1 5
    2 10
    1 5 11
    1 4 1
    2 1
    `);
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
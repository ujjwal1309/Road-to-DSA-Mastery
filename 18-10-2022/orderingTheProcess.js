function orderingTheProcess(arr1,arr2,n){
    let i=0,count=0;
    while(i<n){
        if(arr1[0]==arr2[i])
        {
            arr1.shift();
            i++;
            count++;
        }
        else{
            arr1.push(arr1.shift());
            count++;
        }
    }
    console.log(count)
}

function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let n=+input[0];
   let arr1=input[1].trim().split(' ').map(Number);
   let arr2=input[2].trim().split(' ').map(Number);
   orderingTheProcess(arr1,arr2,n)
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`3
    3 2 1
    1 3 2`);
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
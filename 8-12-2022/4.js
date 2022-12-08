function buySomeHouses(arr,n){
    let obj=new Set();

    for(let i=0; i<n; i++){
        for(let j=0; j<arr[0].length; j++){
            obj.add(arr[i][j]);
        }
    }

    console.log(obj.size);
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
      let n = +input[line];
      line++;
      let arr = new Array(n);
      for (let i = 0; i < n; i++) {
        arr[i] = input[line].trim().split(" ").map(Number);
        line++;
      }
      buySomeHouses(arr, n);
    }
  }
  if (process.env.USERNAME === "ujjwa") {
    runProgram(`1
      3
      1 2
      2 3
      1 3
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
      process.exit(0);
    });
  }
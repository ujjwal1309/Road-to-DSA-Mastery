function noGoogleMaps(arr, n, qrr, q) {
  let obj = {};
  console.log(arr);

  for (let i of arr) {
    if (!obj[i[0]] || !obj[i[1]]) {
      if (!obj[i[0]]) {
        let arr = [];
        arr.push(i[1]);
        obj[i[0]] = arr;
      }

      if (!obj[i[1]]) {
        let arr = [];
        arr.push(i[0]);
        obj[i[1]] = arr;
      }
    }
    if (obj[i[0]] || obj[i[1]]) {
      if (obj[i[0]]) {
        obj[i[0]].push(i[1]);
      }

      if (obj[i[1]]) {
        obj[i[1]].push(i[0]);
      }
    }
  }

  for(let i of qrr){
    if(obj[i[0]].includes(i[1])){
        console.log('YES')
        continue;
    }else if(obj[i[1]].includes(i[0])){
        console.log('YES');
        continue;
    }else{
        console.log('NO');
    }


  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let m = x[0],
    n = x[1];
  let line = 1;
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = input[line].trim().split(" ").map(Number);
    line++;
  }
  let q = +input[line];
  line++;
  let qrr = new Array(q);
  for (let i = 0; i < q; i++) {
    qrr[i] = input[line].trim().split(" ").map(Number);
    line++;
  }

  noGoogleMaps(arr, n, qrr, q);
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`5 6
    1 2
    1 3
    2 3
    3 4
    3 5
    4 5
    3
    2 4
    1 3
    1 5`);
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

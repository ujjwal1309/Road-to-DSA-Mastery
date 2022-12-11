function possiblePalindrome(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    !obj[str[i]] ? (obj[str[i]] = 1) : obj[str[i]]++;
  }

  let count=0;

  for(let key in obj){
    if(obj[key]%2==1){
        count++;
    }
  }

  count<=1 ? console.log('Yes') : console.log('No');
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line].trim();
    line++;
    possiblePalindrome(str);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`1
    carerca`);
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

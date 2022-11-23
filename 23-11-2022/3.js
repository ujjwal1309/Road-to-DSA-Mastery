function runProgram(input) {
  // Write code here
   input = input.trim();
  let str = input;

  let stack = [];
  let i = 0;
  while (i < str.length) {
    if (stack.length == 0) {
      stack.push(str[i]);
    } else if (stack[stack.length - 1] === str[i]) {
      stack.pop();
    }else if(str[i]!==' '){
        stack.push(str[i])
    }
    i++;
  }
  
  stack.length ? console.log(stack.join('')) : console.log('Empty String');
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`aaabccddd`);
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

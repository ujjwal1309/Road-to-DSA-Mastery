function runProgram(input) {
  // Write code here
  input = input.trim();
  let str = input;
  let n = str.length;
  let stack = [];
  let i = 0;

  for (let i = 0; i < n; i++) {
    if (str[i] == "[" || str[i] == "{" || str[i] == "(") {
      if (str[i] == "[") {
        stack.push("]");
      } else if (str[i] == "(") {
        stack.push(")");
      } else {
        stack.push("}");
      }
    }else if(str[i] == "}" || str[i] == "]" || str[i] == ")"){
        if(stack[stack.length-1]===str[i]){
            stack.pop();
        }else{
            console.log('unbalanced');
            return;
        }
    }
  }

  stack.length==0 ? console.log('balanced') : console.log('unbalanced');
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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

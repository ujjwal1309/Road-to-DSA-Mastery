function classicalProblem(str) {
    let stack=[];
    let i=0,n=str.length,s=stack.length-1;
    while(i<n)
    {
        if(str[i]=='[' || str[i]=='{' || str[i]=='(')
        {
            stack.push(str[i]);
            i++;
        }
        else{
            if((stack[s]=='(' && str[i]==')') || (stack[s]=='{' && str[i]=='}') || (stack[s]=='[' && str[i]==']'))
            {
                stack.pop();
                i++;
            }
        }
    }

    if(stack.length==0)
    {
        console.log('balanced');
    }
    else
    {
        console.log('not balanced');
    }

}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line].trim();
    line++;
    classicalProblem(str);
  }
}
if (process.env.USERNAME === "ujjwa") {
  runProgram(`3
    {([])}
    ()
    ([]
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

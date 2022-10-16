function nearestGreater(arr,n){
    let l=[];
    let stack=[];
    let i=0;
    while(i<n){
        if(stack.length==0)
        {
            l.push(-1);
            stack.push(i);
            i++
        }
        else if(arr[stack[stack.length-1]]>arr[i])
        {
            l.push(stack[stack.length-1]);
            stack.push(i);
            i++
        }
        else{
            stack.pop()
        }

    }
    let r=[];
    let stack2=[];
    let j=n-1;
    while(j>=0)
    {
        if(stack2.length==0)
        {
            r.push(-1)
            stack2.push(j)
            j--
        }
        else if(arr[stack2[stack2.length-1]]>arr[j]){
            r.push(stack2[stack2.length-1]);
            stack2.push(j);
            j--
        }
        else{
            stack2.pop()
        }
    }
    r.reverse();

    let ans = "";
    let k=0;
    while(k<n){
console.log('helo')
      if (l[k] == -1 && r[k] == -1 && k<n) {
        ans += `-1 `;
        k++
      } 
      
      if (l[k] == -1 && k<n) {
        ans += `${arr[r[k]]} `;
        k++;
      } 
      if (r[k] == -1 && k<n) {
        ans += `${arr[l[k]]} `;
        k++;
      } 
      if ((Math.abs(l[k]-k) > Math.abs(r[k]-k)) && k<n) {
        ans += `${arr[r[k]]} `;
        k++
      } 
      if ((Math.abs(l[k]-k) < Math.abs(r[k]-k)) && k<n) {
        ans += `${arr[l[k]]} `;
        k++;
      } 
      if((Math.abs(l[k]-k) == Math.abs(r[k]-k)) && k<n) {
        ans += `${arr[l[k]]} `;
        k++;
      }

    }
    console.log(ans);
    

}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
      let n = +input[line];
      line++;
      let arr = input[line].trim().split(" ").map(Number);
      line++;
      nearestGreater(arr, n);
    }
  }
  if (process.env.USERNAME === "ujjwa") {
    runProgram(`1
    5
    5 4 1 3 2`);
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
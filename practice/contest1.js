function mazeRunner(matrix,n,m)
{
    // console.log(matrix,n,m);
    let left=0, right=0;
    let count=0;
    for(let i=0; i<m; i++)
    {
        if(matrix[left][right]=="R")
        {
            count++;
            matrix[left][right]=1;
            right++;
            

        }
        else if(matrix[left][right]==1)
        {
            break;
        }

        if(matrix[left][right]=="L")
        {
            count++;
            matrix[left][right]=1;
            right--;
            

        }
        else if(matrix[left][right]==1)
        {
            break;
        }

        if(matrix[left][right]=="D")
        {
            count++;
            matrix[left][right]=1;
            left++;
            

        }
        else if(matrix[left][right]==1)
        {
            break;
        }
        if(matrix[left][right]=="U")
        {
            count++;
            matrix[left][right]=1;
            left--;
            

        }
        else if(matrix[left][right]==1)
        {
            break;
        }
    }
    console.log(count);

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    let tc=+input[0];
    line=1;
    // console.log(11)
    for(let i=0; i<tc; i++)
    {
        let x=input[line].trim().split(" ").map(Number);
        let n=x[0];
        let m=x[1];
        line++;
        let arr=new Array(n);
        // console.log(arr.length);
        for(let j=0; j<n; j++)
        {
            // let arr2=new Array(m);
            arr[j]=input[line].trim().split("")
            // arr[j]=y
            line++;
        }
        mazeRunner(arr,n,m);
        
    }
    
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`1
    3 4
    RRDR
    LLUD
    LLLL
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
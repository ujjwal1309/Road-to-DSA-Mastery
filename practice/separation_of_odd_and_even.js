function seperationOfOddandEven(arr,n,q)
{
    for(var i=0; i<n-1; i++)
    {
        for(var j=0; j<n-i-1; j++)
        {
            if(arr[j]>arr[j+1] && arr[j]%2==1)
            {
                var temp=arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    if(q==1)
    {
        var high=0;
        for(var i=0; i<n; i++)
        {
            if(arr[i]%2==0)
            {
                var temp=arr[i];
                arr[i]=arr[high];
                arr[high]=temp;
                high++;
            }
        }
        for(var i=high; i<n-1; i++)
        {
            for(var j=high; j<n-i-1; j++)
            {
                if(arr[j]>arr[j+1] && arr[j]%2==1)
                {
                    var temp=arr[j]
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr
    }
    if(q==2)
    {
        var high=0;
        for(var i=0; i<n; i++)
        {
            if(arr[i]%2==1)
            {
                var temp=arr[i];
                arr[i]=arr[high];
                arr[high]=temp;
                high++;
            }
        }
        for(var i=high; i<n-1; i++)
        {
            for(var j=high; j<n-i-1; j++)
            {
                if(arr[j]>arr[j+1] && arr[j]%2==1)
                {
                    var temp=arr[j]
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr

    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1
    for(var i=0; i<tc; i++)
    {
       var n=+input[line];
       line++;
       var arr=input[line].trim().split(" ").map(Number);
       line++;
       var q=input[line];
       line++;
       console.log(seperationOfOddandEven(arr,n,q))
    }
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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
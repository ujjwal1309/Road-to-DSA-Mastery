function removeSort(arr,n)
{
   var j=0, k=n-1;
   while(j<k)
   {
     if(arr[j]<arr[j+1])
     {
        j++;
     }
     else{
        var temp=arr[j+1];
        arr[j+1]=arr[k];
        arr[k]=temp;
        k--;
     }
   }
   var ans="";
   for(var i=0; i<=j; i++)
   {
    ans+=arr[i]+" ";
   }
   return ans;

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    console.log(removeSort(arr,n));
   
  }
  if (process.env.USERNAME=== "ujjwa") {
    runProgram(`10
    2 3 8 9 4 5 7 1 10 6`);
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
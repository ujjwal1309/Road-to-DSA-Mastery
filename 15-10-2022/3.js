let arr = [39, 27, 11, 4, 24, 32, 32, 1];

let n=arr.length;

let ans=[];
let stack=[];
let i=0;
while(i<n)
{
    if(stack.length===0)
    {
        ans.push(-1);
        stack.push(arr[i]);
        i++;
    }
    else if(stack[stack.length-1]<arr[i])
    {
        ans.push(stack[stack.length-1]);
        stack.push(arr[i]);
        i++;
    }
    else{
        stack.pop()
    }
}

console.log(ans)
let arr=[4,3,7,8,8,2,10];
let n=arr.length;
let stack=[];
let ans=[];
let i=0;
while(i<n)
{
    if(stack.length==0)
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
console.log(ans.join(" "))

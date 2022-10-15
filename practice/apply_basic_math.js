let arr=[14,7,8,2,4];
let sum=0;
for(let i=0; i<arr.length; i++)
{
    sum+=arr[i];
}
let min=Infinity;
let index;
for(let i=0; i<arr.length; i++)
{
    if((sum-arr[i])%7==0 && min>arr[i])
    {
        min=arr[i];
        index=i;
    }
}
console.log(min,index);
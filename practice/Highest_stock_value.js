let arr=[1,-3,4,3,-2];

let arr2=[];
let stock=0;
for(let i=0; i<arr.length; i++)
{
    arr2.push(stock);
    stock+=arr[i];  
}
let max=-Infinity;
for(let j=0; j<arr2.length; j++)
{
    if(max<arr2[j])
    {
        max=arr2[j];
    }
}
console.log(max);
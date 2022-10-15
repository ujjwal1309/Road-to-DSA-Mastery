let arr=[1, 2, 3, 4, 5]

let ans="";
let sum=0;
for(let i=0; i<arr.length; i++)
{
    sum+=arr[i];
    ans+=sum+" ";
}
console.log(ans);
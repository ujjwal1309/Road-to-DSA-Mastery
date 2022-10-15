let arr=[3,3,5,5,1];

let sum=0;
for(let i=0; i<arr.length; i++)
{
    sum+=arr[i];
}
// console.log(sum);
let left=0,right=0;
let ans=-1

    for(let j=1; j<arr.length-1; j++)
    {
        left+=arr[j-1];
        right=(sum-left-arr[j]);
        console.log(right,left);

        if(left==right)
        {
            ans=j+1;
        }

    }

console.log(ans);
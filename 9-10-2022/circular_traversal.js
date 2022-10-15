let arr=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

let n=arr.length;
let ans="";

for(let i=n-1; i>=0; i--)
{
    ans+=arr[i][0]+" ";
}

for(let i=1; i<n; i++)
{
    ans+=arr[0][i]+" "
}

for(let i=1; i<n; i++)
{
    ans+=arr[i][n-1]+" ";
}

for(let i=n-2; i>=1; i--)
{
    ans+=arr[n-1][i]+" ";
}

console.log(ans);
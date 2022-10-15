let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let n=3;


for(let i=n-1; i>=0; i--)
{
    let ans='';
    for(let j=n-1; j>=0; j--)
    {
        ans+=arr[i][j]+" ";
    }
    console.log(ans);
}
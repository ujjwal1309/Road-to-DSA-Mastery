let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [1,2,3,4],
    [5,6,7,8]
]

let r=4;
for(let j=r-1; j>=0; j--)
{
    let rotate="";
    for(let i=0; i<r; i++)
    {
        rotate+=arr[i][j]+" ";
    }
    console.log(rotate);
}
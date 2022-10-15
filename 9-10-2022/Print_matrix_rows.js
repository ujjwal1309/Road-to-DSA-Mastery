let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let n=arr.length;

for(let i=0; i<n; i++)
{
    let ans="";
    for(let j=0; j<n; j++)
    {
        if(i%2==0)
        {
            ans+=arr[i][j]+" ";
        }
    }
    if(ans!="")
    {
    console.log(ans);
    }
    else
    {
        continue;
    }
}
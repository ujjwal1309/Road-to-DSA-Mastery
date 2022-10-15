let arr=[

[1, 2],
[3, 4],
[5, 6]
]

let n=3, m=2;

for(let i=0; i<arr.length; i++)
{
    let ans="";
    let p=1;
    for(let j=0; j<m; j++)
    {
        p*=arr[i][j];
    }
    ans+=p;
    console.log(ans)
}
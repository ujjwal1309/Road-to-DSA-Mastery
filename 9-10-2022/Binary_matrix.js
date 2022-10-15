let arr=[
   [1, 0],
   [0, 1],
   [1, 1],
]

let n=3,m=2;

for(let i=0; i<n; i++)
{
    for(let j=0; j<m; j++)
    {
        if(arr[i][j]==1)
        {
            arr[i][j]=0
        }
        else{
            arr[i][j]=1
        }
    }
}

console.log(arr);
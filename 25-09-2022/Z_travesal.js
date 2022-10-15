var arr=[
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,10,11],
    [12,13,14,15,16],
    [1,2,3,4,5]
]
var n=5;

var ans="";
for(var i=0; i<n; i++)
{
    ans+=arr[0][i]+" ";
}

for(var i=1,j=n-2; i<n && j>=0; i++,j--)
{
    ans+=arr[i][j]+" ";
}

for(var i=1; i<n; i++)
{
    ans+=arr[n-1][i]+" ";
}

console.log(ans);
var arr=[
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,10,11],
    [12,13,14,15,16],
    [1,2,3,4,5]
]
var n=5;

var ans="";
for(var i=n-1; i>=0; i--)
{
    ans+=arr[i][0]+" ";

}

for(var i=1; i<n; i++)
{
    ans+=arr[i][i]+" ";
}

for(var i=n-2; i>=0; i--)
{
    ans+=arr[i][n-1]+" ";
}

console.log(ans);
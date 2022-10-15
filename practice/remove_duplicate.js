var arr=[1,1,1,2,2,3,4,4,4]
var n=arr.length;
var j=0;
for(var i=0; i<n-1; i++)
{
    if(arr[i]!=arr[i+1])
    {
        arr[j]=arr[i];
        j++;
    }
}
arr[j]=arr[n-1]
for(var i=0; i<=j;i++)
{
    console.log(arr[i]);
}
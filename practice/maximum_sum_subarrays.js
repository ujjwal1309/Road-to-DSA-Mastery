var arr=[100,200]
var n=arr.length, k=3;
if(k>n)
{
    console.log("Invalid")
}
else
{
    var max=-Infinity;
    for(var i=0;i<=n-k;i++)
    {
        var sum=0;
        for(var j=i;j<=i+k-1;j++)
        {
            sum+=arr[j];
        }
        if(sum>max)
        {
            max=sum;
        }
    }
    console.log(max);
}
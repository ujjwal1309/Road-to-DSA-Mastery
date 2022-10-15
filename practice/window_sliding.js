var arr=[1,4,2,10,2,3,1,0,20]
var n=arr.length;
var k=4;
var max=Number.MIN_VALUE;
for(var i=0; i<n-k+1; i++)
{
    var sum=0;
    for(var j=0; j<k; j++)
    {
        sum+=arr[j+i];
    }
    max=Math.max(sum, max);
}

console.log(max);   
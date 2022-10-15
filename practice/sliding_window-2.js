var arr=[1,4,2,10,2,3,1,0,20]
var n=arr.length;
var k=4;
var sum=0;
for(var i=0; i<k; i++)
{
    sum+=arr[i];
}

var current_sum=sum;
for(var i=k; i<n; i++)
{
    current_sum=current_sum-arr[i-k]+arr[i]
    sum=Math.max(current_sum,sum)

}
console.log(sum)




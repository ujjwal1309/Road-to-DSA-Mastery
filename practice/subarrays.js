var arr=[1,4,2,10,23,3,1,0,20];
var n=arr.length, k=4;
var max_sum=0;
for (var i=0; i<=k; i++)
{
    max_sum+=arr[i];
}
var current_sum=max_sum;
for(var i=k; i<n; i++)
{
    current_sum=current_sum-arr[i-k]+arr[i];
    max_sum=Math.max(current_sum,max_sum);
}
console.log(max_sum);
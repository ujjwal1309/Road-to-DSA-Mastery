var arr=[7,4,9,6,21,8,11,17];
arr=[4,6,7,8,9,11,17,21];
var k=34;
// console.log(arr)

var count=0;
for(let i=0; i<arr.length-2; i++)
{
    var l=i+1;
    var r=arr.length-1;
    while(l<r)
    {
        var sum=arr[i]+arr[l]+arr[r];
        if(sum==k)
        {
            count++;
            l++;
            r--;
        }
        else if(sum>k)
        {
            r--;
        }
        else{
            l++;
        }
    }

}
console.log(count);

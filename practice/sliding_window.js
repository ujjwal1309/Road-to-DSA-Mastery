let arr=[1,4,20,3,10,5];
var n=arr.length, sum=33;
//I have to check if there are any subarray whose sum is 33;
for(var i=0; i<n; i++)
{
    var arr2=[];
    for(var j=i; j<n; j++)
    {
        arr2.push(arr[j]);
        if(sum==Checksum(arr2))
        {
            console.log(arr2);
        }

    }
}

function Checksum(arr)
{
    var sum=0;
    for(var i=0; i<arr.length; i++)
    {
        sum+=arr[i];
    }

    return sum;
}


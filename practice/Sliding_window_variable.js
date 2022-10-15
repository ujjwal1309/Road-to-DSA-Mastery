let arr=[1,4,20,3,10,5];
var n=arr.length, sum=33;
var count=0
var size=0, high=0;
for(var i=0; i<n; i++)
{
    while(size<sum && high<n)
    {
        size+=arr[high];
            high++;
    }

    if(size==sum)
    {
        count++;
    }

    size-=arr[i];
}

console.log(count)
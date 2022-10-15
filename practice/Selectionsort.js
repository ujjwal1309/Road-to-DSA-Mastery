var arr=[64,25,12,22,11];
var n=arr.length;

for(var i=0; i<n-1; i++)
{
    var min=i;
    for(var j=i+1; j<n; j++)
    {
        if(arr[j]<arr[min])
        {
            min=j;
        }
    }
    var temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp;
}
console.log(arr);
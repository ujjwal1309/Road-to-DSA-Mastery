var arr=[7,1,9,2,4,6,5,3];
var n=arr.length;
//sort this array
for(var i=0; i<n-1; i++)
{
    var swap=0;
   for(var j=0; j<n-i-1; j++)
   {
     if(arr[j]>arr[j+1])
     {
        swap=1;
        var temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp;
     }
   }
   if(swap==0)
   {
    break;
   }
}

console.log(arr);




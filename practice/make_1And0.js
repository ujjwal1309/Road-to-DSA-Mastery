var arr=[1,1,0,0,0,1,1,0,0,1,0,0,0];

//output 0,0,0,0,0,0,0,0,1,1,1,1,1

for(var l=0, r=arr.length-1; l<r;)
{
   for(var i=l; arr[l]==0 && l<r; i++)
   {
    l++;
   }

   for(let i=r; arr[r]==1 && l<r;i++)
   {
    r--;
   }

   var temp=arr[r];
   arr[r]=arr[l];
   arr[l]=temp;
   l++;
   r--;
}

console.log(arr);
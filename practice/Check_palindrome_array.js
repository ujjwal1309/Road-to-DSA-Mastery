var arr=[1,1,0,0,1,1];
var arr2=new Array(arr.length);

for(let l=0,r=arr.length-1;l<r;)
{
    var temp=arr[l];
    arr2[l]=arr[r];
    arr2[r]=temp;
    l++;
    r--;
}
// console.log(arr2)
var count=0;
for(let i=0; i<arr.length; i++)
{
    if(arr[i]==arr2[i])
    {
        count++;
    }
}

if(count==arr.length)
{
    console.log("Yes it is a palindromic array");
}
else
{
    console.log("No");
}
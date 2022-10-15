var arr=[7,4,9,6,21,8,11,17];
var n=8;
for(let i=0, j=n-1;i<j;)
{
    var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr);
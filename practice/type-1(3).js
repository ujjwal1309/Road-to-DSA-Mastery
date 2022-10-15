var arr=[1,1,0,0,0,1,1,0,0,1,0,0,0];
var n=13;
for(let i=0,j=n-1;i<j;)
{
    while(arr[i]==0 && i<j)
    {
        i++;
    }
    while(arr[j]==1 && i<j)
    {
        j--;
    }
    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr);
let arr=[4,6,7,8,9,11,17,21];
var n=8,k=30;
var flag=false
for(let i=0,j=n-1;i<j && !flag;)
{
    var sum=arr[i]+arr[j];
    if(sum==k)
    {
        console.log("yes")
        flag=true
    }
    else if(sum>k)
    {
        j--;
    }
    else
    {
        i++;
    }
}
if(flag==false)
{
    console.log("no");
}

var arr=[4,6,7,8,9,11,17,21];
var n=8, k=34;
var flag=false;
for(let i=0; i<n-2 && !flag; i++)
{
    var r=i+1;
    var l=n-1;
    while(r<l)
    {
        var sum=arr[i]+arr[r]+arr[l];
        if(sum==k)
        {
            console.log(i,r,l);
            flag=true;
            l++;
            r--;
        }
        else if(sum>k)
        {
            l++;
        }
        else
        {
            r++;
        }
    }
}
if(flag==false)
{
    console.log(false);
}
var arr=[0, 2, 0, 6, 9,2,2];
var n=7;

var obj={};
for(var i=0; i<n; i++)
{
    if(obj[arr[i]]==undefined)
    {
        obj[arr[i]]=1;
    }
    else
    {
        obj[arr[i]]++;
    }

}

var max=Number.MIN_VALUE;
var ans;
for(var key in obj)
{
    if(obj[key]>max)
    {
        max=obj[key];
        ans=key;
    }
}

console.log(ans);
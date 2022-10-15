let arr=[0, 2, 0, 6, 9];

let obj={};
for(let i=0; i<arr.length; i++)
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

let max=-Infinity;
let ans;
for(let key in obj)
{
    if(max<obj[key])
    {
        max=obj[key];
        ans=key;
    }
}
console.log(ans);
let arr="masui";
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
let x=0;
let y=0;
for(let key in obj)
{
    if(obj[key]==1)
    {
        x++;
    }
    y++;
}

if(x==y)
{
    console.log("Unoque")
}
else
{
    console.log("No");
}
let str="aabbc";
let str2="abcd";
let obj={};
for(let i=0; i<str2.length; i++)
{
    obj[str2[i]]=0;
}
// console.log(obj)
for(let i=0; i<str.length; i++)
{
    if(obj[str[i]]!=undefined)
    {
        obj[str[i]]++;
    }
}

let x=0,y=0;
for(let key in obj)
{
    if(obj[key]>0)
    {
        x++;
    }
    y++;
}
if(x==y)
{
    console.log("Yes");
}
else
{
    console.log("No");
}
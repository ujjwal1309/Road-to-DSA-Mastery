let str="abcdefghi";
let ans="";
for(let i=0; i<str.length; i=i+3)
{
    let rev="";
    for(let j=i; j<i+3; j++)
    {
        rev+=str[j];
    }
    ans+=reverse(rev);
}
console.log(ans);

function reverse(str)
{
    let s="";
    for(let i=str.length-1; i>=0; i-- )
    {
        s+=str[i];
    }
    return s;
}
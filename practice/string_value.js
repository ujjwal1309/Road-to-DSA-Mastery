let str="ujjwal";
let lower="abcdefghijklmnopqrstuvwxyz";
let obj={};
for(let i=0; i<lower.length; i++)
{
    obj[lower[i]]=i+1;
}

let sum=0;
for(let i=0; i<str.length; i++)
{
    for(let key in obj)
    {
        if(str[i]==key)
        {
            sum+=obj[key];
        }
    }
}
console.log(sum);
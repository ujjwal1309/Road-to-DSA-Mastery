let str='aba';

let lower='abcdefghijklmnopqrstuvwxyz';

let obj={};

for(let i=0; i<lower.length; i++)
{
    obj[lower[i]]=i+1;
}

let sum=0;

for(let i=0; i<str.length; i++)
{
    sum+=obj[str[i]];
}

console.log(sum)
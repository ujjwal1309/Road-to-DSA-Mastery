let arr=[4,5,7];
let arr2=[9,2,5];

let obj={};
for(let i=0; i<arr.length; i++)
{
    obj[arr[i]]=0;
}

for(let i=0; i<arr2.length; i++)
{
    if(obj[arr2[i]]==undefined)
    {
        obj[arr2[i]]=0;
    }
    else
    {
        obj[arr2[i]]++;
    }
}
let common=0;
for(let key in obj)
{
    if(obj[key]>0)
    {
      common=+key;
    }
}
console.log(common);
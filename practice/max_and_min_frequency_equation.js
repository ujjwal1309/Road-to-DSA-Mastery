let arr=[1, 2, 2, 3, 3, 3, 5];

let obj={}
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

let min=Infinity, max=-Infinity;
let x,y;
for(let key in obj)
{
    if(obj[key]<min)
    {
        min=obj[key];
        x=+key;
    }

    if(obj[key]>max)
    {
        max=obj[key];
        y=+key;
    }
}
console.log(15*x+2*y);
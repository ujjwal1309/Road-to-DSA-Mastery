let arr1=[4,5,7];
let arr2=[9,2,5];

let obj={};

for(let i=0; i<arr1.length; i++)
{
    obj[arr1[i]]=0;
}

for(let i=0; i<arr1.length; i++){
    if(obj[arr2[i]]===undefined)
    {
        obj[arr2[i]]=0
    }
    else{
        obj[arr2[i]]++;
    }
}

let ans;

for(let key in obj)
{
    if(obj[key]>0)
    {
        ans=key;
    }
}

console.log(ans);
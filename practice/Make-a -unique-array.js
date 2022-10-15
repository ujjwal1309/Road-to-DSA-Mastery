let arr=[2, 2, 2, 7, 9];
//I have to make this a unique array
// let obj={};
// for(let i=0; i<=arr.length-1; i++)
// {
//     obj[arr[i]]=0;
// }
// let unique=[];
// for(let key in obj)
// {
//     unique.push(+key);
// }
// console.log(unique);
let unique=[];
for(let i=0; i<arr.length; i++)
{
    let count=0;
    for(let j=0; j<=i; j++)
    {
        if(arr[i]==arr[j])
        {
            count++;
        }
    }
    if(count==1)
    {
       unique.push(arr[i]);
    }
}
console.log(unique);


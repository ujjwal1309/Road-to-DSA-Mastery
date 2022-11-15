let arr = [2, 5, 0, 9];

let sum=0,avg;

for(let i=0; i<arr.length; i++)
{
    sum+=arr[i];
}

avg=sum/arr.length;

console.log(Math.ceil(avg));

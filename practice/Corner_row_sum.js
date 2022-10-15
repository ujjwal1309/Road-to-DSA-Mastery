let arr=[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]

let sum=0;
for(let i=0; i<arr.length; i++)
{
    sum+=arr[0][i]+arr[arr.length-1][i];
}
console.log(sum);
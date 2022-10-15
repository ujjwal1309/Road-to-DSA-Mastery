let arr=[1, 2, 3, 4, 5, 6];
let arr2=[];
for(let i=0; i<arr.length; i=i+(arr.length/3))
{
    let sum=0;
    for(let j=i; j<i+(arr.length/3); j++)
    {
        sum+=arr[j];
    }
    arr2.push(sum);
}

let ans=0
let c1,c2,c3;
c1=4*arr2[0];
c2=5*arr2[1];
c3=6*arr2[2];
ans=c1+c2+c3;
console.log(ans);

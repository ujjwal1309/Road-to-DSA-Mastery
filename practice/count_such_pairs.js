let arr=[3,0,6,2,7];
let k=9;
let count=0;
for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        let pairs="";
        if(arr[i]+arr[j]==k)
        {
            count++;
            pairs+=arr[i]+" "+arr[j];
        }
        console.log(pairs);
    }
}
// console.log(count);
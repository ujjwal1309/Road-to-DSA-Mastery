let arr = [39, 27, 11, 4, 24, 32, 32, 1];

let n=arr.length;

let ans=[];
ans.push(-1);
for(let i=1; i<n; i++)
{
    let count=0;
    for(let j=i-1; j>=0; j--)
    {
        if(arr[j]<arr[i])
        {
            ans.push(arr[j]);
            count++;
            break;
        }
    }
    if(count==0){
        ans.push(-1);
    }
}

console.log(ans.join(' '));
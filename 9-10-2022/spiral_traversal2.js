let arr=[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
];

let n=arr.length;

let right=0,left=n-1,up=0,down=n-1;
let ans="";

for(let i=0; i<Math.ceil(n/2); i++)
{
    for(let i=right; i<=left; i++)
    {
        ans+=arr[i][down]+' ';
    }
    down--;

    for(let i=down; i>=up; i--)
    {
        ans+=arr[left][i]+' ';
    }
    left--;

    for(let i=left; i>=right; i--)
    {
        ans+=arr[i][up]+' ';
    }
    up++;

    for(let i=up; i<=down; i++)
    {
        ans+=arr[right][i]+" ";
    }
    right++;
}

console.log(ans);

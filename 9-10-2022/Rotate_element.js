let arr=[
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
];

let n=4;

let right=0,left=n-1,up=0,down=n-1;
let ans='';

while(right<left && up<down)
{
    let prev=arr[up+1][right];

    for(let i=up; i<=down; i++)
    {
        let temp=arr[right][i];
        arr[right][i]=prev;
        ans+=arr[right][i]+" ";
        prev=temp;
    }
    right++;

    for(let i=right; i<=left; i++)
    {
        let temp=arr[i][down];
        arr[i][down]=prev;
        ans+=arr[i][down]+" ";
        prev=temp;
    }
    down--;

    for(let i=down; i>=up; i--)
    {
        let temp=arr[left][i];
        arr[left][i]=prev;
        ans+=arr[left][i]+" ";
        prev=temp;
    }
    left--;

    for(let i=left; i>=right; i--)
    {
        let temp=arr[i][up];
        arr[i][up]=prev;
        ans+=arr[i][up]+" ";
        prev=temp;
    }
    up++;
}

console.log(ans);
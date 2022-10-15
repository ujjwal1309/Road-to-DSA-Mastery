var arr=[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]
var n=4;
var left=0,right=n-1,up=0,down=n-1;
while(left<right && up<down)
{
    var pre=arr[1][up];
    for(var i=up; i<=down; i++)
    {
        var temp=arr[left][i];
        arr[left][i]=pre;
        pre=temp;
    }
    left++;
    for(var i=left; i<=right; i++)
    {
        var temp=arr[i][down];
        arr[i][down]=pre;
        pre=temp;
    }
    down--;
    for(var i=down; i>=up; i--)
    {
        var temp=arr[right][i];
        arr[right][i]=pre;
        pre=temp;
    }
    right--;
    for(var i=right; i>=left; i--)
    {
        var temp=arr[up][i];
        arr[up][i]=pre;
        pre=temp;
    }
    up++;
}

console.log(arr);
let arr=[7,4,9,6,21,8,11,17];

let i=0,j=arr.length-1;
while(i<j)
{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}

console.log(arr);
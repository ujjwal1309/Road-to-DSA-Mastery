//Find a pair whose sum is equal to k;

let arr=[7,4,9,6,21,8,11,17];

let n=8,k=30;
let count=0;

// Two Pointer:-

arr.sort((a,b) => a-b)

let i=0,j=n-1;

while(i<j)
{
    let sum=arr[i]+arr[j];
    if(sum==k)
    {
        count++;
        i++;
        j--;
    }
    else if(sum<k)
    {
        i++;
    }
    else{
        j--;
    }
}

console.log(count);

//TC = O(n);
//SC = O(1);


// Brute Force:-

// for(let i=0; i<n-1; i++)
// {
//     for(let j=i+1; j<n; j++)
//     {
//         if(arr[i]+arr[j]==k)
//         {
//             count++;
//         }
//     }
// }

// console.log(count);

//TC = O(n^2);
//SC = O(1)
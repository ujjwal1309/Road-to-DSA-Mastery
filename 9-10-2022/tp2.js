//Find a triplet whose sum is equal to k

let arr=[7,4,9,6,21,8,11,17];

let n=8,m=36;
let count=0;


// Two Pointer

arr.sort((a,b) => a-b);

for(let i=0; i<n-2; i++)
{
    let j=i+1;
    let k=n-1;

    while(j<k){
        let sum=arr[i]+arr[j]+arr[k];
        if(sum==m)
        {
            count++;
            j++;
            k--;
        }
        else if(sum<m)
        {
            j++
        }
        else
        {
            k--;
        }
    }
}

console.log(count);

//Brute Force

// for(let i=0; i<n-2; i++)
// {
//     for(let j=i+1; j<n-1; j++)
//     {
//         for(let k=j+1; k<n; k++)
//         {
//             if(arr[i]+arr[j]+arr[k]==m)
//             {
//                 count++;
//             }
//         }
//     }
// }

// console.log(count)
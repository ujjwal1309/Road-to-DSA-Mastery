let arr=[1,2,3,4,5];
let qrr=[3,5,7];
let n=5,q=3;

let obj={};
for(let i=0; i<q; i++)
{
    obj[qrr[i]]=0;
}

for(let i=0; i<n; i++)
{
    if(obj[arr[i]]!=undefined)
    {
    obj[arr[i]]++
    }
}

for(let key in obj)
{
    if(obj[key]>0)
    {
        console.log('Yes')
    }
    else
    {
        console.log('No');
    }
}

//TC = O(n)
//SC = O(n)

//Brute Force:-
// for(let i=0; i<q; i++)
// {
//     let count=0;
//     for(let j=0; j<n; j++)
//     {
//        if(qrr[i]==arr[j])
//        {
//         count++;
//        }
//     }
//     if(count>0)
//     {
//         console.log('YES')
//     }
//     else
//     {
//         console.log('NO');
//     }
// }

//TC=O(n^2);
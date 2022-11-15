let arr = [2, 2, 2, 7, 9];

let n=5;

let ans='';

for(let i=0; i<n; i++)
{
    let count=0;
    for(let j=i+1; j<n; j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }

    if(count==0){
       ans+=`${arr[i]} `;
    }
}

console.log(ans)


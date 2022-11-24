let arr='1 2 3 4 5 6';

let ans=[];

for(let i=0; i<arr.length; i=i+4){
    let bag='';
    for(let j=i; j<i+3; j++){
        bag+=arr[j];
    }

    ans.push(bag.split(' '));
    
}

console.log(ans)
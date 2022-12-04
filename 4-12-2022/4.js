let arr=[100,60,70,65,80,85];
let n=6;

//------------------------------------------------------------------------------------------->
// Solve a financial problem
//------------------------------------------------------------------------------------------->

let s=[];
let ans=[];
for(let i in arr){
    let count=1;
    let j=i-1

    while(s.length && s[s.length-1]<=arr[i]){
        s.pop();
        count+=ans[j];
        j--;
    }

    s.push(arr[i]);
    ans.push(count);
}


console.log(ans)